/*
 * Editor visual do mapa.
 *
 * Modos:
 *  - Local: reposiciona e edita ambientes.
 *  - Ponto: cria, move e exclui pontos de passagem.
 *  - Conexão: liga ou remove pontos de passagem.
 *
 * Nada é gravado no código automaticamente. O botão "Salvar mapa"
 * grava no navegador; "Exportar JSON" gera uma cópia da configuração.
 */

const editorMap = document.getElementById("editorMap");
const editorNodes = document.getElementById("editorNodes");
const editorSegments = document.getElementById("editorSegments");

const localTools = document.getElementById("localTools");
const pointTools = document.getElementById("pointTools");
const connectionTools = document.getElementById("connectionTools");

const localSelect = document.getElementById("localSelect");
const nameInput = document.getElementById("nameInput");
const typeSelect = document.getElementById("typeSelect");

const xValue = document.getElementById("xValue");
const yValue = document.getElementById("yValue");
const pointIdValue = document.getElementById("pointIdValue");
const pointXValue = document.getElementById("pointXValue");
const pointYValue = document.getElementById("pointYValue");

const connectionStartValue = document.getElementById("connectionStartValue");
const connectionSelectedValue = document.getElementById("connectionSelectedValue");

const pointCount = document.getElementById("pointCount");
const connectionCount = document.getElementById("connectionCount");
const modeLabel = document.getElementById("modeLabel");
const editorStatus = document.getElementById("editorStatus");

const SVG_NS = "http://www.w3.org/2000/svg";

let modo = "local";
let localSelecionado = null;
let pontoSelecionado = null;
let conexaoInicio = null;
let conexaoSelecionada = null;
let arrastando = null;

function setStatus(texto) {
  editorStatus.textContent = texto;
}

function pontoDoEvento(evento) {
  const rect = editorMap.getBoundingClientRect();
  const viewBox = editorMap.viewBox.baseVal;

  return [
    viewBox.x + (evento.clientX - rect.left) * viewBox.width / rect.width,
    viewBox.y + (evento.clientY - rect.top) * viewBox.height / rect.height
  ];
}

function arredondar(valor) {
  return Math.round(valor * 10) / 10;
}

function estaConectado(a, b) {
  return conexoesMapa.some(([x, y]) =>
    (x === a && y === b) || (x === b && y === a)
  );
}

function chaveConexao(a, b) {
  return [a, b].sort().join("|");
}

function nomePonto(id) {
  if (!id) return "—";
  if (id.startsWith("p")) return `Ponto novo ${id.slice(1)}`;
  if (id.startsWith("c")) return `Ponto ${id.slice(1)}`;
  return id;
}

/* ---------- Seletores / modos ---------- */

function atualizarSelect() {
  localSelect.replaceChildren(new Option("Selecione um local", ""));

  Object.entries(categorias).forEach(([grupo, ids]) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = grupo;

    ids.forEach(id => {
      if (!locais[id]) return;
      optgroup.appendChild(new Option(locais[id].nome, id));
    });

    if (optgroup.children.length) localSelect.appendChild(optgroup);
  });
}

function trocarModo(novoModo) {
  modo = novoModo;
  conexaoInicio = null;
  conexaoSelecionada = null;

  document.querySelectorAll(".mode-btn").forEach(botao => {
    botao.classList.toggle("active", botao.dataset.mode === modo);
  });

  localTools.classList.toggle("hidden", modo !== "local");
  pointTools.classList.toggle("hidden", modo !== "ponto");
  connectionTools.classList.toggle("hidden", modo !== "conexao");

  const nomes = {
    local: "Modo: Local",
    ponto: "Modo: Ponto de passagem",
    conexao: "Modo: Conexão"
  };

  modeLabel.textContent = nomes[modo];

  atualizarPainel();
  renderizarTudo();

  if (modo === "local") {
    setStatus("Selecione um local para reposicioná-lo.");
  } else if (modo === "ponto") {
    setStatus("Arraste um ponto ou clique no mapa para criar outro.");
  } else {
    setStatus("Clique em dois pontos de passagem para criar uma conexão.");
  }
}

document.querySelectorAll(".mode-btn").forEach(botao => {
  botao.addEventListener("click", () => trocarModo(botao.dataset.mode));
});

/* ---------- Painéis ---------- */

function atualizarPainelLocal() {
  if (!localSelecionado || !locais[localSelecionado]) {
    nameInput.value = "";
    typeSelect.value = "referencia";
    xValue.textContent = "—";
    yValue.textContent = "—";
    return;
  }

  const local = locais[localSelecionado];
  nameInput.value = local.nome;
  typeSelect.value = local.tipo || "referencia";
  xValue.textContent = Math.round(local.x);
  yValue.textContent = Math.round(local.y);
}

function atualizarPainelPonto() {
  if (!pontoSelecionado || !pontosPassagem[pontoSelecionado]) {
    pointIdValue.textContent = "—";
    pointXValue.textContent = "—";
    pointYValue.textContent = "—";
    return;
  }

  const [x, y] = pontosPassagem[pontoSelecionado];
  pointIdValue.textContent = nomePonto(pontoSelecionado);
  pointXValue.textContent = Math.round(x);
  pointYValue.textContent = Math.round(y);
}

function atualizarPainelConexao() {
  connectionStartValue.textContent = conexaoInicio ? nomePonto(conexaoInicio) : "—";

  if (!conexaoSelecionada) {
    connectionSelectedValue.textContent = "—";
    return;
  }

  connectionSelectedValue.textContent =
    `${nomePonto(conexaoSelecionada[0])} ↔ ${nomePonto(conexaoSelecionada[1])}`;
}

function atualizarContadores() {
  pointCount.textContent = Object.keys(pontosPassagem).length;
  connectionCount.textContent = conexoesMapa.length;
}

function atualizarPainel() {
  atualizarPainelLocal();
  atualizarPainelPonto();
  atualizarPainelConexao();
  atualizarContadores();
}

function selecionarLocal(id) {
  if (!locais[id]) return;

  localSelecionado = id;
  localSelect.value = id;
  atualizarPainelLocal();
  renderizarTudo();
}

function selecionarPonto(id) {
  if (!pontosPassagem[id]) return;

  pontoSelecionado = id;
  atualizarPainelPonto();
  renderizarTudo();
}

/* ---------- Renderização ---------- */

function criarPath(a, b) {
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`);
  path.classList.add("editor-segment");
  return path;
}

function renderizarSegmentos() {
  editorSegments.replaceChildren();

  conexoesMapa.forEach(([a, b]) => {
    if (!pontosPassagem[a] || !pontosPassagem[b]) return;

    const path = criarPath(pontosPassagem[a], pontosPassagem[b]);
    path.dataset.a = a;
    path.dataset.b = b;

    if (
      conexaoSelecionada &&
      chaveConexao(a, b) === chaveConexao(conexaoSelecionada[0], conexaoSelecionada[1])
    ) {
      path.classList.add("selected");
    }

    path.addEventListener("click", evento => {
      evento.stopPropagation();

      if (modo !== "conexao") return;

      conexaoSelecionada = [a, b];
      conexaoInicio = null;
      atualizarPainelConexao();
      renderizarSegmentos();

      setStatus(`Conexão ${nomePonto(a)} ↔ ${nomePonto(b)} selecionada.`);
    });

    editorSegments.appendChild(path);
  });
}

function criarCirculo(cx, cy, classe, id, raio) {
  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", raio);
  circle.classList.add(...classe.split(" "));
  circle.dataset.id = id;
  return circle;
}

function renderizarPontosPassagem() {
  Object.entries(pontosPassagem).forEach(([id, point]) => {
    const group = document.createElementNS(SVG_NS, "g");
    const circle = criarCirculo(point[0], point[1], "editor-point", id, 20);
    const text = document.createElementNS(SVG_NS, "text");

    if (id === pontoSelecionado) circle.classList.add("selected");
    if (id === conexaoInicio) circle.classList.add("connection-start");

    text.setAttribute("x", point[0] + 28);
    text.setAttribute("y", point[1] - 20);
    text.classList.add("editor-point-label");
    text.textContent = nomePonto(id);

    circle.addEventListener("pointerdown", iniciarArraste);
    circle.addEventListener("click", evento => {
      evento.stopPropagation();
      tratarCliquePonto(id);
    });

    group.append(circle, text);
    editorNodes.appendChild(group);
  });
}

function renderizarLocais() {
  Object.entries(locais).forEach(([id, local]) => {
    const group = document.createElementNS(SVG_NS, "g");
    const circle = criarCirculo(local.x, local.y, "editor-node", id, 24);
    const text = document.createElementNS(SVG_NS, "text");

    if (id === localSelecionado) circle.classList.add("selected");
    if (local.tipo === "origem") circle.classList.add("origin");
    if (local.tipo === "destino") circle.classList.add("destination");

    text.setAttribute("x", Number(local.x) + 34);
    text.setAttribute("y", Number(local.y) - 28);
    text.classList.add("editor-label");
    text.textContent = local.nome;

    circle.addEventListener("pointerdown", iniciarArraste);
    circle.addEventListener("click", evento => {
      evento.stopPropagation();
      if (modo === "local") selecionarLocal(id);
    });

    group.append(circle, text);
    editorNodes.appendChild(group);
  });
}

function renderizarTudo() {
  renderizarSegmentos();
  editorNodes.replaceChildren();

  /*
   * Os pontos de passagem ficam por baixo dos locais, para que os locais
   * continuem fáceis de selecionar quando estiverem muito próximos.
   */
  renderizarPontosPassagem();
  renderizarLocais();
  atualizarPainel();
}

/* ---------- Arrastar ---------- */

function iniciarArraste(evento) {
  const id = evento.currentTarget.dataset.id;

  if (modo === "local") {
    if (!locais[id]) return;
    selecionarLocal(id);
    arrastando = { tipo: "local", id };
  } else if (modo === "ponto") {
    if (!pontosPassagem[id]) return;
    selecionarPonto(id);
    arrastando = { tipo: "ponto", id };
  } else {
    return;
  }

  evento.currentTarget.setPointerCapture?.(evento.pointerId);
  evento.preventDefault();
}

editorMap.addEventListener("pointermove", evento => {
  if (!arrastando) return;

  const [x, y] = pontoDoEvento(evento);
  const novoX = arredondar(x);
  const novoY = arredondar(y);

  if (arrastando.tipo === "local" && locais[arrastando.id]) {
    locais[arrastando.id].x = novoX;
    locais[arrastando.id].y = novoY;
    atualizarPainelLocal();
  }

  if (arrastando.tipo === "ponto" && pontosPassagem[arrastando.id]) {
    pontosPassagem[arrastando.id] = [novoX, novoY];
    atualizarPainelPonto();
  }

  renderizarTudo();
  setStatus(
    arrastando.tipo === "local"
      ? `Posicionando ${locais[arrastando.id]?.nome || arrastando.id}…`
      : `Posicionando ${nomePonto(arrastando.id)}…`
  );
});

window.addEventListener("pointerup", () => {
  if (!arrastando) return;

  const item = arrastando;
  arrastando = null;

  if (item.tipo === "local") {
    setStatus(`${locais[item.id]?.nome || item.id} reposicionado. Clique em "Salvar mapa".`);
  } else {
    setStatus(`${nomePonto(item.id)} reposicionado. As conexões acompanham o ponto. Salve o mapa.`);
  }
});

/* ---------- Cliques no mapa ---------- */

function tratarCliquePonto(id) {
  if (modo === "ponto") {
    selecionarPonto(id);
    setStatus(`${nomePonto(id)} selecionado. Arraste-o para ajustar a posição.`);
    return;
  }

  if (modo !== "conexao") return;

  if (!conexaoInicio) {
    conexaoInicio = id;
    conexaoSelecionada = null;
    atualizarPainelConexao();
    renderizarTudo();
    setStatus(`${nomePonto(id)} selecionado. Agora clique no segundo ponto.`);
    return;
  }

  if (conexaoInicio === id) {
    conexaoInicio = null;
    atualizarPainelConexao();
    renderizarTudo();
    setStatus("Seleção da conexão cancelada.");
    return;
  }

  if (estaConectado(conexaoInicio, id)) {
    conexaoSelecionada = [conexaoInicio, id];
    conexaoInicio = null;
    atualizarPainelConexao();
    renderizarTudo();
    setStatus("Essa conexão já existe. Ela foi selecionada para remoção.");
    return;
  }

  conexoesMapa.push([conexaoInicio, id]);
  conexaoSelecionada = [conexaoInicio, id];
  const descricao = `${nomePonto(conexaoInicio)} ↔ ${nomePonto(id)}`;
  conexaoInicio = null;

  atualizarPainel();
  renderizarTudo();
  setStatus(`Conexão ${descricao} criada. Clique em "Salvar mapa".`);
}

editorMap.addEventListener("click", evento => {
  if (evento.target.closest("circle") || evento.target.closest("path")) return;

  const [x, y] = pontoDoEvento(evento);

  if (modo === "local") {
    if (!localSelecionado) {
      setStatus("Selecione um local antes de clicar no mapa.");
      return;
    }

    locais[localSelecionado].x = arredondar(x);
    locais[localSelecionado].y = arredondar(y);
    atualizarPainelLocal();
    renderizarTudo();
    setStatus(`${locais[localSelecionado].nome} posicionado no mapa.`);
    return;
  }

  if (modo === "ponto") {
    criarPonto(arredondar(x), arredondar(y));
    return;
  }

  setStatus("No modo Conexão, clique diretamente nos dois pontos de passagem.");
});

/* ---------- Pontos ---------- */

function proximoIdPonto() {
  let numero = 1;
  while (pontosPassagem[`p${numero}`]) numero++;
  return `p${numero}`;
}

function criarPonto(x = CAMPUS_SVG.width / 2, y = CAMPUS_SVG.height / 2) {
  const id = proximoIdPonto();
  pontosPassagem[id] = [x, y];
  pontoSelecionado = id;

  atualizarPainel();
  renderizarTudo();
  setStatus(`${nomePonto(id)} criado. Arraste-o para a posição correta e salve.`);
}

document.getElementById("addPointBtn").addEventListener("click", () => {
  criarPonto(CAMPUS_SVG.width / 2, CAMPUS_SVG.height / 2);
});

document.getElementById("deletePointBtn").addEventListener("click", () => {
  if (!pontoSelecionado || !pontosPassagem[pontoSelecionado]) {
    setStatus("Selecione um ponto de passagem primeiro.");
    return;
  }

  const id = pontoSelecionado;

  if (!confirm(`Excluir ${nomePonto(id)} e todas as conexões dele?`)) return;

  delete pontosPassagem[id];

  for (let i = conexoesMapa.length - 1; i >= 0; i--) {
    if (conexoesMapa[i][0] === id || conexoesMapa[i][1] === id) {
      conexoesMapa.splice(i, 1);
    }
  }

  if (conexaoInicio === id) conexaoInicio = null;
  if (conexaoSelecionada?.includes(id)) conexaoSelecionada = null;

  pontoSelecionado = null;
  atualizarPainel();
  renderizarTudo();
  setStatus(`${nomePonto(id)} excluído. Clique em "Salvar mapa".`);
});

/* ---------- Locais ---------- */

localSelect.addEventListener("change", () => {
  if (!localSelect.value) {
    localSelecionado = null;
    atualizarPainelLocal();
    renderizarTudo();
    return;
  }

  selecionarLocal(localSelect.value);
});

document.getElementById("applyBtn").addEventListener("click", () => {
  if (!localSelecionado || !locais[localSelecionado]) {
    setStatus("Selecione um local primeiro.");
    return;
  }

  locais[localSelecionado].nome =
    nameInput.value.trim() || locais[localSelecionado].nome;

  locais[localSelecionado].tipo = typeSelect.value;

  atualizarSelect();
  localSelect.value = localSelecionado;
  atualizarPainelLocal();
  renderizarTudo();

  setStatus("Dados do local atualizados. Clique em \"Salvar mapa\".");
});

document.getElementById("addLocalBtn").addEventListener("click", () => {
  let numero = 1;
  while (locais[`novoLocal${numero}`]) numero++;

  const id = `novoLocal${numero}`;

  locais[id] = {
    nome: `Novo local ${numero}`,
    x: CAMPUS_SVG.width / 2,
    y: CAMPUS_SVG.height / 2,
    tipo: "destino"
  };

  categorias["Novos locais"] ||= [];
  categorias["Novos locais"].push(id);

  localSelecionado = id;
  atualizarSelect();
  localSelect.value = id;
  atualizarPainelLocal();
  renderizarTudo();

  setStatus("Novo local criado. Posicione-o e salve o mapa.");
});

document.getElementById("deleteLocalBtn").addEventListener("click", () => {
  if (!localSelecionado || !locais[localSelecionado]) {
    setStatus("Selecione um local primeiro.");
    return;
  }

  const id = localSelecionado;

  if (!confirm(`Excluir ${locais[id].nome}?`)) return;

  delete locais[id];

  Object.values(categorias).forEach(lista => {
    const index = lista.indexOf(id);
    if (index >= 0) lista.splice(index, 1);
  });

  localSelecionado = null;
  atualizarSelect();
  atualizarPainelLocal();
  renderizarTudo();

  setStatus("Local excluído. Clique em \"Salvar mapa\".");
});

/* ---------- Conexões ---------- */

document.getElementById("removeConnectionBtn").addEventListener("click", () => {
  if (!conexaoSelecionada) {
    setStatus("Clique em uma conexão azul para selecioná-la.");
    return;
  }

  const [a, b] = conexaoSelecionada;
  const indice = conexoesMapa.findIndex(([x, y]) => chaveConexao(x, y) === chaveConexao(a, b));

  if (indice < 0) {
    conexaoSelecionada = null;
    atualizarPainelConexao();
    return;
  }

  conexoesMapa.splice(indice, 1);
  conexaoSelecionada = null;
  atualizarPainel();
  renderizarTudo();

  setStatus(`Conexão ${nomePonto(a)} ↔ ${nomePonto(b)} removida. Clique em "Salvar mapa".`);
});

document.getElementById("cancelConnectionBtn").addEventListener("click", () => {
  conexaoInicio = null;
  conexaoSelecionada = null;
  atualizarPainelConexao();
  renderizarTudo();
  setStatus("Seleção de conexão cancelada.");
});

/* ---------- Arquivo / persistência ---------- */

document.getElementById("saveBtn").addEventListener("click", () => {
  if (salvarDadosMapa()) {
    setStatus("Mapa salvo neste navegador. O Campus Guia já usará essa configuração.");
  } else {
    setStatus("Não foi possível salvar neste navegador.");
  }
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const dados = exportarDadosMapa();
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "campus-guia-mapa.json";
  link.click();

  URL.revokeObjectURL(url);
  setStatus("Configuração exportada.");
});

document.getElementById("importInput").addEventListener("change", async evento => {
  const arquivo = evento.target.files[0];
  if (!arquivo) return;

  try {
    const dados = JSON.parse(await arquivo.text());

    if (!dados.locais) throw new Error("Arquivo sem locais.");

    if (dados.pontosPassagem && typeof dados.pontosPassagem !== "object") {
      throw new Error("pontosPassagem inválidos.");
    }

    if (dados.conexoesMapa && !Array.isArray(dados.conexoesMapa)) {
      throw new Error("conexoesMapa inválidas.");
    }

    localStorage.setItem("campusGuiaMapa", JSON.stringify(dados));
    location.reload();
  } catch (erro) {
    setStatus(`Erro ao importar: ${erro.message}`);
  } finally {
    evento.target.value = "";
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Recarregar os dados originais e apagar as alterações salvas neste navegador?")) return;

  localStorage.removeItem("campusGuiaMapa");
  location.reload();
});

/* ---------- Inicialização ---------- */

atualizarSelect();
atualizarPainel();
renderizarTudo();
