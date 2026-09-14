/*
 * Campus Guia — motor do mapa
 *
 * Este arquivo contém somente o comportamento/calculo do mapa.
 * Os dados editáveis ficam em dados.js.
 */

const pontos = {};
const conexoes = [];
const ligaLocal = {};
let segmentosCorredor = [];
let segmentosAcesso = [];
let caminhos = [];
let areas = [];

function distanciaPonto(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

function chavePonto(point) {
  return `${point[0].toFixed(2)}:${point[1].toFixed(2)}`;
}

function intersecaoSegmentos(a, b, c, d) {
  const den = (a[0] - b[0]) * (c[1] - d[1]) - (a[1] - b[1]) * (c[0] - d[0]);
  if (Math.abs(den) < 0.0001) return null;

  const t = ((a[0] - c[0]) * (c[1] - d[1]) - (a[1] - c[1]) * (c[0] - d[0])) / den;
  const u = -((a[0] - b[0]) * (a[1] - c[1]) - (a[1] - b[1]) * (a[0] - c[0])) / den;

  if (t < -0.0001 || t > 1.0001 || u < -0.0001 || u > 1.0001) return null;
  return [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])];
}

function projecaoEmSegmento(point, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const divisor = dx * dx + dy * dy;
  const t = divisor
    ? Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / divisor))
    : 0;

  const projetado = [a[0] + t * dx, a[1] + t * dy];
  return { t, ponto: projetado, distancia: distanciaPonto(point, projetado) };
}

/*
 * Mantido para compatibilidade/futuras importações da planta.
 * A navegação atual usa pontosPassagem + conexoesMapa, que são editáveis.
 */
function extrairSegmentosAzuis(svgDocument) {
  if (!svgDocument) return [];

  return [...svgDocument.querySelectorAll("path")]
    .filter(path => (path.getAttribute("fill") || "").toLowerCase() === "#1071e5")
    .map(path => {
      const matrix = path.getCTM();
      const length = path.getTotalLength();
      if (!matrix || !length) return null;

      const amostras = [];
      for (let i = 0; i <= 64; i++) {
        const p = path.getPointAtLength(length * i / 64);
        amostras.push([
          matrix.a * p.x + matrix.c * p.y + matrix.e,
          matrix.b * p.x + matrix.d * p.y + matrix.f
        ]);
      }

      const media = amostras.reduce((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0])
        .map(v => v / amostras.length);

      let xx = 0, yy = 0, xy = 0;
      amostras.forEach(([x, y]) => {
        xx += (x - media[0]) ** 2;
        yy += (y - media[1]) ** 2;
        xy += (x - media[0]) * (y - media[1]);
      });

      const angulo = 0.5 * Math.atan2(2 * xy, xx - yy);
      const eixo = [Math.cos(angulo), Math.sin(angulo)];
      const projetados = amostras.map(p => p[0] * eixo[0] + p[1] * eixo[1]);
      const minimo = Math.min(...projetados);
      const maximo = Math.max(...projetados);
      const margem = Math.max(8, (maximo - minimo) * 0.04);

      const inicio = amostras.filter((_, i) => projetados[i] <= minimo + margem);
      const fim = amostras.filter((_, i) => projetados[i] >= maximo - margem);
      const mediaPontos = grupo => grupo.reduce((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0]).map(v => v / grupo.length);

      return [mediaPontos(inicio), mediaPontos(fim)];
    })
    .filter(Boolean);
}

function sincronizarCentrosSvg(svgDocument) {
  if (!svgDocument) return false;

  const areasSvg = [...svgDocument.querySelectorAll("path")]
    .filter(path => (path.getAttribute("fill") || "").toLowerCase() === "#fff")
    .map(path => {
      const box = path.getBBox();
      if (box.width > 900 || box.height > 900) return null;
      const matrix = path.getCTM();
      if (!matrix) return null;

      const corners = [[box.x, box.y], [box.x + box.width, box.y + box.height]];
      const transformados = corners.map(([x, y]) => [
        matrix.a * x + matrix.c * y + matrix.e,
        matrix.b * x + matrix.d * y + matrix.f
      ]);

      return {
        centro: [
          (transformados[0][0] + transformados[1][0]) / 2,
          (transformados[0][1] + transformados[1][1]) / 2
        ],
        area: box.width * box.height
      };
    })
    .filter(Boolean);

  if (!areasSvg.length) return false;

  const usados = new Set();
  Object.entries(locais).forEach(([id, local]) => {
    const candidato = areasSvg
      .map((area, index) => ({ area, index, distancia: distanciaPonto([local.x, local.y], area.centro) }))
      .filter(item => !usados.has(item.index))
      .sort((a, b) => a.distancia - b.distancia)[0];

    if (!candidato) return;
    usados.add(candidato.index);
    [local.x, local.y] = candidato.area.centro;
  });

  return true;
}

function limparGrafo() {
  Object.keys(pontos).forEach(id => delete pontos[id]);
  conexoes.length = 0;
  Object.keys(ligaLocal).forEach(id => delete ligaLocal[id]);
}

function adicionarConexaoGrafo(a, b) {
  if (!pontos[a] || !pontos[b] || a === b) return false;
  const existe = conexoes.some(([x, y]) =>
    (x === a && y === b) || (x === b && y === a)
  );
  if (!existe) conexoes.push([a, b]);
  return !existe;
}

function ligarLocaisAosPontos() {
  Object.entries(locais).forEach(([id, local]) => {
    const candidatos = Object.entries(pontos)
      .filter(([nodeId]) => nodeId.startsWith("c") || nodeId.startsWith("p"))
      .map(([nodeId, point]) => ({
        nodeId,
        point,
        distancia: distanciaPonto([local.x, local.y], point)
      }))
      .sort((a, b) => a.distancia - b.distancia);

    const candidato = candidatos[0];
    if (!candidato) return;

    const acessoId = `acesso-${id}`;
    pontos[acessoId] = [local.x, local.y];
    ligaLocal[id] = acessoId;
    adicionarConexaoGrafo(acessoId, candidato.nodeId);
    local.rota = candidato.point;
  });
}

function construirGrafoEditavel() {
  limparGrafo();

  Object.entries(pontosPassagem || {}).forEach(([id, point]) => {
    if (!Array.isArray(point) || point.length !== 2) return;
    const x = Number(point[0]);
    const y = Number(point[1]);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    pontos[id] = [x, y];
  });

  (Array.isArray(conexoesMapa) ? conexoesMapa : []).forEach(([a, b]) => {
    adicionarConexaoGrafo(a, b);
  });

  ligarLocaisAosPontos();
}

function construirGrafoAzul() {
  // Compatibilidade com mapas antigos que ainda só possuem segmentosAzuis.
  limparGrafo();

  const segmentos = Array.isArray(segmentosAzuis) ? segmentosAzuis : [];
  const divisores = segmentos.map(() => [0, 1]);

  segmentos.forEach((segmento, i) => {
    segmentos.forEach((outro, j) => {
      if (j <= i) return;
      const cruzamento = intersecaoSegmentos(segmento[0], segmento[1], outro[0], outro[1]);
      if (!cruzamento) return;
      divisores[i].push(projecaoEmSegmento(cruzamento, segmento[0], segmento[1]).t);
      divisores[j].push(projecaoEmSegmento(cruzamento, outro[0], outro[1]).t);
    });
  });

  const nos = {};
  const arestas = [];
  const obterNo = point => {
    const key = chavePonto(point);
    if (!nos[key]) nos[key] = { id: `c${Object.keys(nos).length + 1}`, ponto: point };
    return nos[key].id;
  };

  segmentos.forEach((segmento, i) => {
    const ts = [...new Set(divisores[i].map(t => +t.toFixed(6)))].sort((a, b) => a - b);

    for (let j = 0; j < ts.length - 1; j++) {
      const a = [
        segmento[0][0] + ts[j] * (segmento[1][0] - segmento[0][0]),
        segmento[0][1] + ts[j] * (segmento[1][1] - segmento[0][1])
      ];
      const b = [
        segmento[0][0] + ts[j + 1] * (segmento[1][0] - segmento[0][0]),
        segmento[0][1] + ts[j + 1] * (segmento[1][1] - segmento[0][1])
      ];

      const de = obterNo(a);
      const para = obterNo(b);
      if (de !== para) arestas.push([de, para]);
    }
  });

  Object.values(nos).forEach(no => { pontos[no.id] = no.ponto; });
  arestas.forEach(([a, b]) => adicionarConexaoGrafo(a, b));
  ligarLocaisAosPontos();
}

function atualizarSegmentosDerivados() {
  segmentosCorredor = conexoes
    .filter(([a, b]) => pontos[a] && pontos[b] && !a.startsWith("acesso-") && !b.startsWith("acesso-"))
    .map(([a, b], indice) => ({
      id: `corredor-${String(indice + 1).padStart(2, "0")}`,
      de: a,
      para: b,
      pontos: [pontos[a], pontos[b]],
      tipo: "corredor"
    }));

  segmentosAcesso = conexoes
    .filter(([a, b]) => a.startsWith("acesso-") || b.startsWith("acesso-"))
    .map(([a, b], indice) => ({
      id: `acesso-${String(indice + 1).padStart(2, "0")}`,
      de: a,
      para: b,
      pontos: [pontos[a], pontos[b]],
      tipo: "acesso"
    }));

  caminhos = segmentosCorredor.map(segmento =>
    `M ${segmento.pontos[0][0]} ${segmento.pontos[0][1]} L ${segmento.pontos[1][0]} ${segmento.pontos[1][1]}`
  );
}

function criarAreas() {
  areas = Object.entries(locais).map(([id, local]) => ({
    id,
    tipo: id === "fonte" ? "elipse" : retangulares.has(id) ? "retangulo" : "losango",
    centro: [local.x, local.y],
    largura: id === "fonte" ? 150 : retangulares.has(id) ? 110 : 82,
    altura: id === "fonte" ? 56 : retangulares.has(id) ? 58 : 70,
    raio: 8,
    classe: retangulares.has(id) ? "area regular" : "area",
    rotulo: local.nome
  }));
}

function aplicarDadosSalvos() {
  try {
    if (typeof localStorage === "undefined") return false;
    const bruto = localStorage.getItem("campusGuiaMapa");
    if (!bruto) return false;

    const salvo = JSON.parse(bruto);

    if (salvo.locais) {
      Object.entries(salvo.locais).forEach(([id, dados]) => {
        if (!locais[id]) {
          locais[id] = {
            nome: dados.nome || id,
            x: Number(dados.x),
            y: Number(dados.y),
            tipo: dados.tipo || "referencia"
          };
          categorias["Locais importados"] ||= [];
          categorias["Locais importados"].push(id);
          return;
        }

        Object.assign(locais[id], {
          nome: dados.nome ?? locais[id].nome,
          x: Number(dados.x),
          y: Number(dados.y),
          tipo: dados.tipo ?? locais[id].tipo
        });
      });
    }

    if (salvo.pontosPassagem && typeof salvo.pontosPassagem === "object") {
      Object.keys(pontosPassagem).forEach(id => delete pontosPassagem[id]);
      Object.entries(salvo.pontosPassagem).forEach(([id, point]) => {
        if (!Array.isArray(point) || point.length !== 2) return;
        const x = Number(point[0]);
        const y = Number(point[1]);
        if (Number.isFinite(x) && Number.isFinite(y)) pontosPassagem[id] = [x, y];
      });
    }

    if (Array.isArray(salvo.conexoesMapa)) {
      conexoesMapa.splice(0, conexoesMapa.length, ...salvo.conexoesMapa);
    }

    /*
     * Compatibilidade com o JSON v1:
     * se ele só tiver segmentosAzuis, não substituímos a nova rede editável.
     */
    return true;
  } catch (erro) {
    console.warn("Não foi possível carregar os dados salvos do mapa.", erro);
    return false;
  }
}

function exportarDadosMapa() {
  return {
    versao: 2,
    locais: Object.fromEntries(Object.entries(locais).map(([id, local]) => [id, {
      nome: local.nome,
      x: local.x,
      y: local.y,
      tipo: local.tipo || "referencia"
    }])),
    pontosPassagem: Object.fromEntries(Object.entries(pontosPassagem).map(([id, point]) => [
      id, [Number(point[0]), Number(point[1])]
    ])),
    conexoesMapa: conexoesMapa.map(([a, b]) => [a, b])
  };
}

function salvarDadosMapa() {
  if (typeof localStorage === "undefined") return false;
  localStorage.setItem("campusGuiaMapa", JSON.stringify(exportarDadosMapa()));
  return true;
}

function inicializarMapa() {
  aplicarDadosSalvos();

  if (Object.keys(pontosPassagem || {}).length) {
    construirGrafoEditavel();
  } else {
    construirGrafoAzul();
  }

  atualizarSegmentosDerivados();
  criarAreas();
}

function atualizarGeometriaSvg(svgDocument) {
  const novosSegmentos = extrairSegmentosAzuis(svgDocument);
  if (!novosSegmentos.length) return false;

  segmentosAzuis.splice(0, segmentosAzuis.length, ...novosSegmentos);
  sincronizarCentrosSvg(svgDocument);

  if (!Object.keys(pontosPassagem || {}).length) {
    construirGrafoAzul();
    atualizarSegmentosDerivados();
  }

  return true;
}

function ponto(id) {
  if (locais[id]) return locais[id].rota || [locais[id].x, locais[id].y];
  return pontos[id] || null;
}

function pontoAmbiente(id) {
  if (!locais[id]) return ponto(id);
  return [locais[id].x, locais[id].y];
}

function distancia(a, b) {
  const A = ponto(a), B = ponto(b);
  return A && B ? distanciaPonto(A, B) : Infinity;
}

function montarAreasVerdes() {
  return [
    { id: "areaVerde1", tipo: "poligono", pontos: [[50,370],[110,305],[170,370],[110,435]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [110,370] },
    { id: "areaVerde2", tipo: "poligono", pontos: [[580,245],[620,205],[660,245],[620,285]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [620,245] },
    { id: "areaVerde3", tipo: "poligono", pontos: [[1060,395],[1105,350],[1150,395],[1105,440]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [1105,395] },
    { id: "areaVerde4", tipo: "poligono", pontos: [[875,540],[920,495],[965,540],[920,585]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [920,540] },
    { id: "areaVerde5", tipo: "poligono", pontos: [[1380,395],[1425,350],[1470,395],[1425,440]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [1425,395] }
  ];
}

inicializarMapa();

const CAMPUS_MAP = {
  viewBox: { x: 0, y: 0, width: CAMPUS_SVG.width, height: CAMPUS_SVG.height },
  imagemReferencia: CAMPUS_SVG.imagemReferencia,
  locais,
  pontos,
  conexoes,
  ligaLocal,
  segmentosCorredor,
  segmentosAcesso,
  caminhos,
  areas: areas.concat(montarAreasVerdes()),
  categorias
};

const locaisVisiveis = Object.keys(locais);
