/*
 * Campus Guia — mapa FAFRAM Campos 1
 *
 * Fonte única dos dados usados pela interface e pelo cálculo de rotas.
 * As coordenadas dos ambientes e dos eixos navegáveis usam o espaço nativo
 * do campus1.svg (4033.94 x 1976.96). O centro do ambiente é separado do
 * ponto de acesso ao corredor para que nenhuma rota atravesse uma sala.
 */

const locais = {
  // Entrada e serviços
  entrada: { nome: "Entrada", x: 760, y: 638, tipo: "origem", acesso: "entradaJ" },
  portaria: { nome: "Portaria", x: 540, y: 638, acesso: "portariaJ" },
  atendimento: { nome: "Atendimento", x: 970, y: 638, acesso: "atendimentoJ" },
  fonte: { nome: "Fonte", x: 760, y: 770, acesso: "fonteJ" },

  // Laboratórios e bloco esquerdo
  labEngenharia: { nome: "Laboratório de Engenharia", x: 158, y: 90, acesso: "labEngenhariaJ" },
  cantina: { nome: "Cantina", x: 414, y: 155, acesso: "cantinaJ" },
  lab3: { nome: "Lab 3", x: 155, y: 236, acesso: "lab3J" },
  lab2: { nome: "Lab 2", x: 211, y: 281, acesso: "lab2J" },
  lab1: { nome: "Lab 1", x: 259, y: 337, acesso: "lab1J" },
  lab4: { nome: "Lab 4", x: 249, y: 470, acesso: "lab4J" },
  sala1: { nome: "Sala 1", x: 199, y: 527, acesso: "sala1J" },
  sala2: { nome: "Sala 2", x: 471, y: 566, acesso: "sala2J" },
  sala3: { nome: "Sala 3", x: 430, y: 500, acesso: "sala3J" },
  sala4: { nome: "Sala 4", x: 374, y: 455, acesso: "sala4J" },
  sala5: { nome: "Sala 5", x: 430, y: 340, acesso: "sala5J" },
  sala6: { nome: "Sala 6", x: 454, y: 291, acesso: "sala6J" },
  sala7: { nome: "Sala 7", x: 556, y: 303, acesso: "sala7J" },
  sala8: { nome: "Sala 8", x: 616, y: 366, acesso: "sala8J" },

  // Áreas e ambientes centrais
  patioEsquerdo: { nome: "Pátio", x: 316, y: 228, acesso: "patioEsquerdoJ" },
  patioCentral: { nome: "Pátio", x: 725, y: 299, acesso: "patioCentralJ" },
  banheirosEsquerda: { nome: "Banheiros", x: 359, y: 409, acesso: "banheirosEsquerdaJ" },
  salaProfessores: { nome: "Sala dos professores", x: 672, y: 411, acesso: "salaProfessoresJ" },
  banheiroFeminino: { nome: "Banheiro feminino", x: 799, y: 395, acesso: "banheiroFemininoJ" },
  banheiroMasculino: { nome: "Banheiro masculino", x: 845, y: 429, acesso: "banheiroMasculinoJ" },
  cozinha: { nome: "Cozinha", x: 872, y: 377, acesso: "cozinhaJ" },
  salaoNobre: { nome: "Salão nobre", x: 750, y: 463, acesso: "salaoNobreJ" },
  diretoria: { nome: "Diretoria", x: 620, y: 477, acesso: "diretoriaJ" },
  secretaria: { nome: "Secretaria", x: 566, y: 526, acesso: "secretariaJ" },

  // Bloco superior
  sala11: { nome: "Sala 11", x: 879, y: 165, acesso: "sala11J" },
  biblioteca: { nome: "Biblioteca", x: 1066, y: 165, acesso: "bibliotecaJ" },
  banheiros: { nome: "Banheiros", x: 1247, y: 165, acesso: "banheirosJ" },
  sala25: { nome: "Sala 25", x: 1433, y: 165, acesso: "sala25J" },

  // Salas 12 a 24 e acessos do bloco direito
  sala18: { nome: "Sala 18", x: 1062, y: 269, acesso: "sala18J" },
  sala20: { nome: "Sala 20", x: 1003, y: 309, acesso: "sala20J" },
  sala19: { nome: "Sala 19", x: 992, y: 353, acesso: "sala19J" },
  sala17: { nome: "Sala 17", x: 1155, y: 270, acesso: "sala17J" },
  sala16: { nome: "Sala 16", x: 1184, y: 342, acesso: "sala16J" },
  sala12: { nome: "Sala 12", x: 985, y: 458, acesso: "sala12J" },
  sala13: { nome: "Sala 13", x: 1042, y: 510, acesso: "sala13J" },
  sala15: { nome: "Sala 15", x: 1219, y: 478, acesso: "sala15J" },
  sala14: { nome: "Sala 14", x: 1189, y: 537, acesso: "sala14J" },
  sala21: { nome: "Sala 21", x: 1338, y: 373, acesso: "sala21J" },
  sala22: { nome: "Sala 22", x: 1340, y: 313, acesso: "sala22J" },
  sala23: { nome: "Sala 23", x: 1359, y: 463, acesso: "sala23J" },
  sala24: { nome: "Sala 24", x: 1408, y: 512, acesso: "sala24J" },
  banheirosDireita: { nome: "Banheiros", x: 1285, y: 406, acesso: "banheirosDireitaJ" },
  rampa2: { nome: "Rampa 2º andar", x: 1431, y: 251, acesso: "rampa2J" },
  escada2: { nome: "Escada 2º andar", x: 1312, y: 517, acesso: "escada2J" },

  // Salas 40 a 49
  sala40: { nome: "Sala 40", x: 1540, y: 263, acesso: "sala40J" },
  sala41: { nome: "Sala 41", x: 1540, y: 325, acesso: "sala41J" },
  sala42: { nome: "Sala 42", x: 1540, y: 386, acesso: "sala42J" },
  sala43: { nome: "Sala 43", x: 1540, y: 447, acesso: "sala43J" },
  sala44: { nome: "Sala 44", x: 1540, y: 508, acesso: "sala44J" },
  sala49: { nome: "Sala 49", x: 1371, y: 580, acesso: "sala49J" },
  sala48: { nome: "Sala 48", x: 1424, y: 580, acesso: "sala48J" },
  sala47: { nome: "Sala 47", x: 1477, y: 580, acesso: "sala47J" },
  sala46: { nome: "Sala 46", x: 1510, y: 580, acesso: "sala46J" },
  sala45: { nome: "Sala 45", x: 1540, y: 580, acesso: "sala45J" }
};

/*
 * Nós do grafo. Eles acompanham os corredores desenhados na planta oficial.
 * Os nós não são exibidos como ambientes; servem apenas para calcular e
 * desenhar a rota entre o ponto de origem e o destino.
 */
const pontos = {
  entradaJ: [760, 610],
  portariaJ: [650, 638],
  atendimentoJ: [870, 638],
  fonteJ: [760, 695],

  eixoCentro: [760, 535],
  centroEsquerda: [650, 445],
  centroMeio: [555, 360],
  centroAlto: [455, 275],
  centroEsquerdaAlto: [330, 220],

  esquerdoBaixo: [520, 565],
  esquerdoMeio: [430, 470],
  esquerdoAlto: [330, 330],
  esquerdoTopo: [240, 230],

  eixoDireito: [860, 430],
  direito1: [970, 430],
  direito2: [1080, 430],
  direito3: [1190, 430],
  direito4: [1290, 430],
  direito5: [1400, 430],

  centralSuperior: [760, 300],
  topo1: [850, 220],
  topo2: [980, 200],
  topo3: [1120, 200],
  topo4: [1260, 200],
  topo5: [1380, 200],
  topo6: [1490, 200],

  ramoCozinha: [900, 350],
  ramoSalas18: [1010, 320],
  ramoSalas17: [1120, 320],
  ramoRampa: [1280, 280],
  corredorDireito: [1460, 300],
  corredorDireitoBaixo: [1460, 500],
  ramoEscada: [1330, 540],
  corredorInferior: [1400, 580]
};

const conexoes = [
  ["entrada", "entradaJ"],
  ["entradaJ", "eixoCentro"],
  ["eixoCentro", "centroEsquerda"],
  ["centroEsquerda", "centroMeio"],
  ["centroMeio", "centroAlto"],
  ["centroAlto", "centroEsquerdaAlto"],

  ["entradaJ", "portariaJ"],
  ["entradaJ", "atendimentoJ"],
  ["entradaJ", "fonteJ"],

  ["centroEsquerda", "esquerdoBaixo"],
  ["esquerdoBaixo", "esquerdoMeio"],
  ["esquerdoMeio", "esquerdoAlto"],
  ["esquerdoAlto", "esquerdoTopo"],
  ["centroMeio", "esquerdoAlto"],

  ["eixoCentro", "eixoDireito"],
  ["eixoDireito", "direito1"],
  ["direito1", "direito2"],
  ["direito2", "direito3"],
  ["direito3", "direito4"],
  ["direito4", "direito5"],

  ["eixoDireito", "ramoCozinha"],
  ["ramoCozinha", "ramoSalas18"],
  ["ramoSalas18", "ramoSalas17"],
  ["ramoSalas17", "ramoRampa"],
  ["ramoRampa", "corredorDireito"],
  ["corredorDireito", "corredorDireitoBaixo"],
  ["direito4", "ramoEscada"],
  ["ramoEscada", "corredorInferior"],
  ["direito5", "corredorInferior"],

  ["eixoCentro", "centralSuperior"],
  ["centralSuperior", "topo1"],
  ["topo1", "topo2"],
  ["topo2", "topo3"],
  ["topo3", "topo4"],
  ["topo4", "topo5"],
  ["topo5", "topo6"],
  ["topo6", "corredorDireito"]
];

/* Ligação de cada ambiente ao corredor mais próximo. */
const ligaLocal = {
  portaria: "portariaJ",
  atendimento: "atendimentoJ",
  fonte: "fonteJ",

  labEngenharia: "esquerdoTopo",
  cantina: "centroEsquerdaAlto",
  lab3: "esquerdoTopo",
  lab2: "esquerdoAlto",
  lab1: "esquerdoAlto",
  lab4: "esquerdoMeio",
  sala1: "esquerdoBaixo",
  sala2: "esquerdoBaixo",
  sala3: "esquerdoMeio",
  sala4: "esquerdoMeio",
  sala5: "centroAlto",
  sala6: "centroAlto",
  sala7: "centroMeio",
  sala8: "centroEsquerda",

  patioEsquerdo: "centroEsquerdaAlto",
  patioCentral: "centralSuperior",
  banheirosEsquerda: "esquerdoMeio",
  salaProfessores: "centroEsquerda",
  banheiroFeminino: "ramoCozinha",
  banheiroMasculino: "ramoCozinha",
  cozinha: "ramoCozinha",
  salaoNobre: "eixoDireito",
  diretoria: "eixoCentro",
  secretaria: "eixoCentro",

  sala11: "topo2",
  biblioteca: "topo3",
  banheiros: "topo4",
  sala25: "topo6",

  sala18: "ramoSalas18",
  sala20: "ramoSalas18",
  sala19: "direito1",
  sala17: "ramoSalas17",
  sala16: "ramoSalas17",
  sala12: "direito1",
  sala13: "direito2",
  sala15: "direito3",
  sala14: "ramoEscada",
  sala21: "ramoRampa",
  sala22: "ramoRampa",
  sala23: "direito5",
  sala24: "corredorDireitoBaixo",
  banheirosDireita: "direito4",
  rampa2: "ramoRampa",
  escada2: "ramoEscada",

  sala40: "corredorDireito",
  sala41: "corredorDireito",
  sala42: "corredorDireitoBaixo",
  sala43: "corredorDireitoBaixo",
  sala44: "corredorDireitoBaixo",
  sala49: "corredorInferior",
  sala48: "corredorInferior",
  sala47: "corredorInferior",
  sala46: "corredorInferior",
  sala45: "corredorInferior"
};

/*
 * O arquivo campus1.svg foi exportado com este espaço de desenho e com um
 * transform no grupo raiz. Os dados antigos estavam em 1560 x 815, portanto
 * a conversão é feita uma única vez aqui, antes de áreas e rotas serem usadas.
 */
const CAMPUS_SVG = {
  width: 4033.94,
  height: 1976.96,
  translateX: 471.2080546732275,
  translateY: -588.0394574039277,
  oldWidth: 1560,
  oldHeight: 815
};

function paraCoordenadaSvg([x, y]) {
  return [
    x * CAMPUS_SVG.width / CAMPUS_SVG.oldWidth,
    y * CAMPUS_SVG.height / CAMPUS_SVG.oldHeight
  ];
}

Object.values(locais).forEach(local => {
  [local.x, local.y] = paraCoordenadaSvg([local.x, local.y]);
});
Object.keys(pontos).forEach(id => {
  pontos[id] = paraCoordenadaSvg(pontos[id]);
});

/*
 * Centros dos ambientes no campus1.svg. O mapa novo não é uma simples versão
 * redimensionada do desenho anterior: ele tem outra origem, outra rotação e
 * salas adicionais. Por isso estes pontos são mantidos no espaço nativo do
 * SVG, separados dos nós usados para navegar.
 */
const CENTROS_AMBIENTES_SVG = {
  entrada: [2041.4, 1708.5],
  portaria: [1809.0, 1714.0],
  atendimento: [2273.9, 1714.1],
  fonte: [2041.4, 1996.6],
  labEngenharia: [779.0, 213.6],
  cantina: [1035.9, 465.5],
  lab3: [680.5, 955.4],
  lab2: [835.7, 1114.4],
  lab1: [1015.9, 1291.2],
  lab4: [661.3, 1291.2],
  sala11: [2147.4, 468.2],
  biblioteca: [2461.3, 468.2],
  banheiros: [2747.4, 468.2],
  sala25: [2996.7, 468.2],
  sala40: [3959.9, 809.3],
  sala41: [3959.9, 1003.6],
  sala42: [3959.9, 1197.8],
  sala43: [3959.9, 1392.1],
  sala44: [3959.9, 1586.3],
  sala49: [3441.6, 1756.9],
  sala48: [3571.2, 1758.3],
  sala47: [3700.9, 1758.3],
  sala46: [3830.6, 1758.3],
  sala45: [3960.3, 1758.3],
  patioEsquerdo: [1035.9, 465.5],
  patioCentral: [1926.7, 1282.8],
  banheirosEsquerda: [542.3, 816.9],
  salaProfessores: [1521.1, 881.2],
  cozinha: [2667.5, 1246.6],
  salaoNobre: [2385.2, 1426.8],
  diretoria: [1619.8, 1375.3],
  secretaria: [1486.5, 1507.5],
  sala18: [2496.1, 920.3],
  sala20: [2339.5, 1074.7],
  sala19: [2413.5, 1001.9],
  sala17: [2778.1, 895.4],
  sala16: [2930.2, 1043.9],
  sala12: [2522.2, 1564.8],
  sala13: [2385.2, 1426.8],
  sala15: [2775.1, 1601.1],
  sala14: [2907.6, 1479.5],
  sala21: [3357.3, 1107.4],
  sala22: [3354.6, 1399.5],
  sala23: [3434.0, 1032.1],
  sala24: [3428.7, 1474.2],
  banheirosDireita: [3576.2, 1250.4],
  rampa2: [3190.0, 790.0],
  escada2: [2775.1, 1601.1]
};

Object.entries(CENTROS_AMBIENTES_SVG).forEach(([id, centro]) => {
  if (locais[id]) [locais[id].x, locais[id].y] = centro;
});

/* Eixos centrais das 20 faixas azuis extraídos do campus1.svg. */
let segmentosAzuis = [
  [[860.65,1273.55],[1334.27,801.67]],
  [[3362.50,1647.91],[3890.77,1649.14]],
  [[1674.22,1226.04],[2061.18,1614.75]],
  [[2006.69,900.58],[2634.84,1530.56]],
  [[1409.56,1433.93],[2191.94,653.39]],
  [[2062.60,1549.26],[2636.56,977.11]],
  [[605.25,695.04],[1406.83,1498.49]],
  [[1337.78,864.13],[1626.58,1154.65]],
  [[472.39,1331.96],[1271.48,534.73]],
  [[1322.33,1858.39],[1782.50,1400.00]],
  [[538.10,694.58],[983.26,251.18]],
  [[416.51,889.50],[1320.23,1795.09]],
  [[2637.47,909.33],[3141.38,1415.02]],
  [[3207.88,1414.02],[3548.86,1074.76]],
  [[3194.29,1101.12],[3547.71,1456.26]],
  [[3182.27,1072.48],[3183.48,687.13]],
  [[2632.34,1597.18],[3194.28,1037.04]],
  [[3843.97,1602.95],[3845.24,821.04]],
  [[1456.83,640.43],[2191.94,641.00]],
  [[2191.94,641.00],[3229.03,641.78]],
  [[986.72,187.03],[1789.06,991.24]]
];

function distanciaPonto(A, B) {
  return Math.hypot(A[0] - B[0], A[1] - B[1]);
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
  const t = Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / divisor));
  return { t, ponto: [a[0] + t * dx, a[1] + t * dy], distancia: distanciaPonto(point, [a[0] + t * dx, a[1] + t * dy]) };
}

function distanciaAosCorredores(point) {
  return Math.min(...segmentosAzuis.map(([a, b]) => projecaoEmSegmento(point, a, b).distancia));
}

function chavePonto(point) {
  return `${point[0].toFixed(2)}:${point[1].toFixed(2)}`;
}

function construirGrafoAzul() {
  const divisores = segmentosAzuis.map(() => [0, 1]);
  segmentosAzuis.forEach((segmento, i) => {
    segmentosAzuis.forEach((outro, j) => {
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

  segmentosAzuis.forEach((segmento, i) => {
    const ts = [...new Set(divisores[i].map(t => +t.toFixed(6)))].sort((a, b) => a - b);
    for (let j = 0; j < ts.length - 1; j++) {
      const a = [segmento[0][0] + ts[j] * (segmento[1][0] - segmento[0][0]), segmento[0][1] + ts[j] * (segmento[1][1] - segmento[0][1])];
      const b = [segmento[0][0] + ts[j + 1] * (segmento[1][0] - segmento[0][0]), segmento[0][1] + ts[j + 1] * (segmento[1][1] - segmento[0][1])];
      const de = obterNo(a);
      const para = obterNo(b);
      if (de !== para) arestas.push([de, para]);
    }
  });

  /* O SVG tem junções que encostam pela largura da faixa, mas não se cruzam
   * matematicamente. Unimos somente extremidades próximas, nunca pontos
   * internos, para preservar o percurso físico dos corredores azuis. */
  const extremidades = [...new Set(segmentosAzuis.flatMap(segmento => [chavePonto(segmento[0]), chavePonto(segmento[1])]))];
  const idsExtremidades = extremidades.map(key => nos[key]?.id).filter(Boolean);
  const pontosNos = Object.fromEntries(Object.values(nos).map(no => [no.id, no.ponto]));
  idsExtremidades.forEach((a, i) => {
    idsExtremidades.slice(i + 1).forEach(b => {
      const distancia = distanciaPonto(pontosNos[a], pontosNos[b]);
      const jaLigados = arestas.some(([de, para]) => (de === a && para === b) || (de === b && para === a));
      const meio = [(pontosNos[a][0] + pontosNos[b][0]) / 2, (pontosNos[a][1] + pontosNos[b][1]) / 2];
      if (distancia <= 270 && distanciaAosCorredores(meio) <= 110 && !jaLigados) arestas.push([a, b]);
    });
  });

  /* Junção específica do encontro diagonal–horizontal do térreo. As bordas
   * dos dois polígonos azuis se sobrepõem visualmente, mas os eixos exportados
   * ficam separados por poucos pixels. */
  const nosProximos = Object.values(nos);
  for (let i = 0; i < nosProximos.length; i++) {
    for (let j = i + 1; j < nosProximos.length; j++) {
      const a = nosProximos[i];
      const b = nosProximos[j];
      if (distanciaPonto(a.ponto, b.ponto) > 25) continue;
      const jaLigados = arestas.some(([de, para]) => (de === a.id && para === b.id) || (de === b.id && para === a.id));
      if (!jaLigados) arestas.push([a.id, b.id]);
    }
  }

  Object.keys(pontos).forEach(id => delete pontos[id]);
  Object.values(nos).forEach(no => { pontos[no.id] = no.ponto; });
  conexoes.length = 0;
  arestas.forEach(([de, para]) => conexoes.push([de, para]));

  Object.keys(ligaLocal).forEach(id => delete ligaLocal[id]);
  Object.entries(locais).forEach(([id, local]) => {
    /* O próprio centro geométrico da área determina o acesso. Um corredor
     * pode receber qualquer quantidade de salas; não existe mais uma tabela
     * manual sala -> corredor. */
    const candidato = segmentosAzuis
      .map((segmento, indice) => ({ indice, ...projecaoEmSegmento([local.x, local.y], segmento[0], segmento[1]) }))
      .sort((a, b) => a.distancia - b.distancia)[0];
    const alvo = segmentosAzuis[candidato.indice];
    const acesso = candidato.ponto;
    local.rota = acesso;

    /* Cada ambiente ganha um nó exatamente na sua projeção sobre o corredor.
     * Assim Sala 25, por exemplo, conecta-se ao meio do corredor horizontal,
     * e não à extremidade que poderia levar ao corredor vertical do 2º andar. */
    const acessoId = `acesso-${id}`;
    pontos[acessoId] = acesso;
    ligaLocal[id] = acessoId;
    const candidatosNoCorredor = Object.entries(pontos)
      .filter(([nodeId, point]) => nodeId !== acessoId)
      .map(([nodeId, point]) => ({ nodeId, point, distancia: projecaoEmSegmento(point, alvo[0], alvo[1]).distancia }))
      .sort((a, b) => a.distancia - b.distancia || distanciaPonto(acesso, a.point) - distanciaPonto(acesso, b.point));
    if (candidatosNoCorredor[0]) conexoes.push([acessoId, candidatosNoCorredor[0].nodeId]);
  });
}

construirGrafoAzul();

/*
 * Segmentos navegáveis dos corredores. Cada segmento conecta dois nós
 * adjacentes; assim a rota passa exatamente por cada mudança de direção,
 * bifurcação e acesso, em vez de interpolar uma linha única pelo campus.
 */
let segmentosCorredor = conexoes
  .filter(([a, b]) => pontos[a] && pontos[b])
  .map(([a, b], indice) => ({
    id: `corredor-${String(indice + 1).padStart(2, "0")}`,
    de: a,
    para: b,
    pontos: [pontos[a], pontos[b]],
    tipo: "corredor"
  }));

let segmentosAcesso = Object.entries(ligaLocal).map(([local, no]) => ({
  id: `acesso-${local}`,
  de: local,
  para: no,
  pontos: [pontoLocalTemporario(locais[local]), pontos[no]],
  tipo: "acesso"
}));

function pontoLocalTemporario(local) {
  return [local.x, local.y];
}

let caminhos = segmentosCorredor.map(segmento =>
  `M ${segmento.pontos[0][0]} ${segmento.pontos[0][1]} L ${segmento.pontos[1][0]} ${segmento.pontos[1][1]}`
);

/*
 * Recalibra os centros a partir do SVG oficial. Os valores acima são apenas
 * uma semente de migração para associar os nomes semânticos às formas; depois
 * que o <object> termina de carregar, a posição usada pela aplicação vem do
 * centro da área branca correspondente, calculado com getBBox/getCTM.
 */
function sincronizarCentrosSvg(svgDocument) {
  if (!svgDocument) return false;
  const areas = [...svgDocument.querySelectorAll('path')]
    .filter(path => (path.getAttribute('fill') || '').toLowerCase() === '#fff')
    .map(path => {
      const box = path.getBBox();
      if (box.width > 900 || box.height > 900) return null;
      const matrix = path.getCTM();
      if (!matrix) return null;
      const corners = [[box.x, box.y], [box.x + box.width, box.y + box.height]];
      const transformed = corners.map(([x, y]) => [
        matrix.a * x + matrix.c * y + matrix.e,
        matrix.b * x + matrix.d * y + matrix.f
      ]);
      return {
        centro: [
          (transformed[0][0] + transformed[1][0]) / 2,
          (transformed[0][1] + transformed[1][1]) / 2
        ],
        area: box.width * box.height
      };
    })
    .filter(Boolean);

  if (!areas.length) return false;

  const usados = new Set();
  Object.entries(locais)
    .sort(([, a], [, b]) => (a.x * a.x + a.y * a.y) - (b.x * b.x + b.y * b.y))
    .forEach(([id, local]) => {
      const candidato = areas
        .map((area, index) => ({ area, index, distancia: distanciaPonto([local.x, local.y], area.centro) }))
        .filter(item => !usados.has(item.index))
        .sort((a, b) => a.distancia - b.distancia)[0];
      if (!candidato) return;
      usados.add(candidato.index);
      [local.x, local.y] = candidato.area.centro;
    });

  /* Recalcula todos os acessos sem reconstruir o grafo: os nós de corredor
   * continuam os mesmos, mas cada sala passa a apontar para a projeção do seu
   * centro geométrico no corredor azul mais próximo. */
  Object.entries(locais).forEach(([id, local]) => {
    const candidato = segmentosAzuis
      .map((segmento, indice) => ({ indice, ...projecaoEmSegmento([local.x, local.y], segmento[0], segmento[1]) }))
      .sort((a, b) => a.distancia - b.distancia)[0];
    const acesso = candidato.ponto;
    local.rota = acesso;
    pontos[`acesso-${id}`] = acesso;
  });
  return true;
}

/* Extrai os corredores da planta carregada. Cada corredor azul é um retângulo
 * rotacionado; amostramos seu contorno, calculamos o eixo principal e usamos
 * as extremidades desse eixo como segmento navegável. Assim uma nova versão
 * do SVG não depende de coordenadas copiadas de uma versão anterior. */
function extrairSegmentosAzuis(svgDocument) {
  return [...svgDocument.querySelectorAll('path')]
    .filter(path => (path.getAttribute('fill') || '').toLowerCase() === '#1071e5')
    .map(path => {
      const matrix = path.getCTM();
      const length = path.getTotalLength();
      const pontosAmostrados = [];
      for (let i = 0; i <= 64; i++) {
        const p = path.getPointAtLength(length * i / 64);
        pontosAmostrados.push([
          matrix.a * p.x + matrix.c * p.y + matrix.e,
          matrix.b * p.x + matrix.d * p.y + matrix.f
        ]);
      }

      const media = pontosAmostrados.reduce((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0])
        .map(v => v / pontosAmostrados.length);
      let xx = 0, yy = 0, xy = 0;
      pontosAmostrados.forEach(([x, y]) => {
        xx += (x - media[0]) ** 2;
        yy += (y - media[1]) ** 2;
        xy += (x - media[0]) * (y - media[1]);
      });
      const angulo = 0.5 * Math.atan2(2 * xy, xx - yy);
      const eixo = [Math.cos(angulo), Math.sin(angulo)];
      const projetados = pontosAmostrados.map(p => p[0] * eixo[0] + p[1] * eixo[1]);
      const minimo = Math.min(...projetados);
      const maximo = Math.max(...projetados);
      const margem = Math.max(8, (maximo - minimo) * 0.04);
      const inicio = pontosAmostrados.filter((_, i) => projetados[i] <= minimo + margem);
      const fim = pontosAmostrados.filter((_, i) => projetados[i] >= maximo - margem);
      const mediaPontos = grupo => grupo.reduce((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0]).map(v => v / grupo.length);
      return [mediaPontos(inicio), mediaPontos(fim)];
    });
}

function atualizarGeometriaSvg(svgDocument) {
  const novosSegmentos = extrairSegmentosAzuis(svgDocument);
  if (novosSegmentos.length !== 20) return false;
  segmentosAzuis = novosSegmentos;
  sincronizarCentrosSvg(svgDocument);
  construirGrafoAzul();
  segmentosCorredor = conexoes
    .filter(([a, b]) => pontos[a] && pontos[b])
    .map((segmento, indice) => ({
      id: `corredor-${String(indice + 1).padStart(2, "0")}`,
      de: segmento[0],
      para: segmento[1],
      pontos: [pontos[segmento[0]], pontos[segmento[1]]],
      tipo: "corredor"
    }));
  segmentosAcesso = Object.entries(ligaLocal).map(([local, no]) => ({
    id: `acesso-${local}`,
    de: local,
    para: no,
    pontos: [[locais[local].x, locais[local].y], pontos[no]],
    tipo: "acesso"
  }));
  caminhos = segmentosCorredor.map(segmento =>
    `M ${segmento.pontos[0][0]} ${segmento.pontos[0][1]} L ${segmento.pontos[1][0]} ${segmento.pontos[1][1]}`
  );
  return true;
}

const categorias = {
  "Entrada e serviços": ["entrada", "portaria", "atendimento", "fonte"],
  "Laboratórios": ["labEngenharia", "cantina", "lab1", "lab2", "lab3", "lab4"],
  "Salas 01–08": ["sala1", "sala2", "sala3", "sala4", "sala5", "sala6", "sala7", "sala8"],
  "Áreas centrais": [
    "patioEsquerdo", "patioCentral", "banheirosEsquerda", "salaProfessores",
    "banheiroFeminino", "banheiroMasculino", "cozinha", "salaoNobre",
    "diretoria", "secretaria"
  ],
  "Salas e serviços": ["sala11", "biblioteca", "banheiros", "sala25"],
  "Salas 12–24": [
    "sala12", "sala13", "sala14", "sala15", "sala16", "sala17", "sala18",
    "sala19", "sala20", "sala21", "sala22", "sala23", "sala24", "banheirosDireita"
  ],
  "2º andar": [
    "rampa2", "escada2", "sala40", "sala41", "sala42", "sala43", "sala44",
    "sala45", "sala46", "sala47", "sala48", "sala49"
  ]
};

/* Geometria semântica dos ambientes para futuras renderizações do SVG. */
const retangulares = new Set([
  "labEngenharia", "cantina", "sala11", "biblioteca", "banheiros", "sala25",
  "rampa2", "escada2", "sala40", "sala41", "sala42", "sala43", "sala44",
  "sala45", "sala46", "sala47", "sala48", "sala49", "portaria", "entrada",
  "atendimento", "diretoria", "secretaria"
]);

const areas = Object.entries(locais).map(([id, local]) => ({
  id,
  tipo: id === "fonte" ? "elipse" : retangulares.has(id) ? "retangulo" : "losango",
  centro: [local.x, local.y],
  largura: id === "fonte" ? 150 : retangulares.has(id) ? 110 : 82,
  altura: id === "fonte" ? 56 : retangulares.has(id) ? 58 : 70,
  raio: 8,
  classe: retangulares.has(id) ? "area regular" : "area",
  rotulo: local.nome
})).concat([
  { id: "areaVerde1", tipo: "poligono", pontos: [[50, 370], [110, 305], [170, 370], [110, 435]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [110, 370] },
  { id: "areaVerde2", tipo: "poligono", pontos: [[580, 245], [620, 205], [660, 245], [620, 285]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [620, 245] },
  { id: "areaVerde3", tipo: "poligono", pontos: [[1060, 395], [1105, 350], [1150, 395], [1105, 440]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [1105, 395] },
  { id: "areaVerde4", tipo: "poligono", pontos: [[875, 540], [920, 495], [965, 540], [920, 585]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [920, 540] },
  { id: "areaVerde5", tipo: "poligono", pontos: [[1380, 395], [1425, 350], [1470, 395], [1425, 440]], classe: "green-area", rotulo: "ÁREA VERDE", centro: [1425, 395] }
]);

const CAMPUS_MAP = {
  viewBox: { x: 0, y: 0, width: CAMPUS_SVG.width, height: CAMPUS_SVG.height },
  imagemReferencia: "campus1.svg",
  transformacao: CAMPUS_SVG,
  locais,
  pontos,
  conexoes,
  ligaLocal,
  segmentosCorredor,
  segmentosAcesso,
  caminhos,
  areas,
  categorias
};

const locaisVisiveis = Object.keys(locais);
