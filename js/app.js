const originSelect = document.getElementById("originSelect");
const destinationSelect = document.getElementById("destinationSelect");
const routeBtn = document.getElementById("routeBtn");
const resetBtn = document.getElementById("resetBtn");
const accessibilityBtn = document.getElementById("accessibilityBtn");
const statusEl = document.getElementById("status");
const instructions = document.getElementById("instructions");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const routeSteps = document.getElementById("routeSteps");
const routePath = document.getElementById("routePath");
const player = document.getElementById("player");
const destinationMarker = document.getElementById("destinationMarker");
const mapNodes = document.getElementById("mapNodes");
const baseWalkways = document.getElementById("baseWalkways");
const SVG_NS = "http://www.w3.org/2000/svg";
let trajetoriaFrame = null;

function pararAnimacaoTrajetoria(){
  if (trajetoriaFrame !== null) cancelAnimationFrame(trajetoriaFrame);
  trajetoriaFrame = null;
  routePath.classList.remove("route-animating");
}

function animarTrajetoria(){
  pararAnimacaoTrajetoria();
  routePath.classList.add("route-animating");

  const comprimento = routePath.getTotalLength();
  if (!comprimento) return;

  const inicio = performance.now();
  const duracao = Math.min(5200, Math.max(1800, comprimento * 1.4));

  function atualizar(agora){
    const progresso = Math.min(1, (agora - inicio) / duracao);
    const pontoAtual = routePath.getPointAtLength(comprimento * progresso);
    player.setAttribute("cx", pontoAtual.x);
    player.setAttribute("cy", pontoAtual.y);
    if (progresso < 1) {
      trajetoriaFrame = requestAnimationFrame(atualizar);
    } else {
      trajetoriaFrame = null;
    }
  }

  trajetoriaFrame = requestAnimationFrame(atualizar);
}

function preencherSelects(){
  const grupos = Object.entries(categorias);

  grupos.forEach(([grupo, ids]) => {
    const og1 = document.createElement("optgroup");
    og1.label = grupo;

    ids.forEach(id => {
      if (!locais[id]) return;
      const option = document.createElement("option");
      option.value = id;
      option.textContent = locais[id].nome;
      og1.appendChild(option);
    });

    originSelect.appendChild(og1);

    const og2 = og1.cloneNode(true);
    destinationSelect.appendChild(og2);
  });
}

function desenharNos(){
  Object.entries(locais).forEach(([id, local]) => {
    if (id.startsWith("areaVerde")) return;

    const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", local.x);
    c.setAttribute("cy", local.y);
    c.setAttribute("r", "5");
    c.setAttribute("class", "map-node");
    c.dataset.id = id;
    c.setAttribute("aria-label", local.nome);
    mapNodes.appendChild(c);
  });
}

function desenharSegmentos(){
  segmentosCorredor.forEach(segmento => {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute(
      "d",
      `M ${segmento.pontos[0][0]} ${segmento.pontos[0][1]} L ${segmento.pontos[1][0]} ${segmento.pontos[1][1]}`
    );
    path.setAttribute("class", "walk segment-walk");
    path.dataset.segmento = segmento.id;
    baseWalkways.appendChild(path);
  });
}

function caminhoParaSvg(coords){
  if (!coords.length) return "";
  return coords.map((p,i) => `${i===0?"M":"L"} ${p[0]} ${p[1]}`).join(" ");
}

function nomeLocal(id){
  return locais[id]?.nome || id;
}

function gerarPassos(caminho, origem, destino){
  const steps = [];
  steps.push(`Você está em <b>${nomeLocal(origem)}</b>.`);

  const locaisIntermediarios = caminho.filter(id => locais[id] && id !== origem && id !== destino);

  if (locaisIntermediarios.length){
    const max = Math.min(locaisIntermediarios.length, 4);
    for(let i=0;i<max;i++){
      steps.push(`Siga pelo corredor em direção a <b>${nomeLocal(locaisIntermediarios[i])}</b>.`);
    }
  } else {
    steps.push("Siga pelo caminho destacado no mapa.");
  }

  steps.push(`Seu destino é <b>${nomeLocal(destino)}</b>.`);
  return steps;
}

function mostrarRota(){
  const origem = originSelect.value;
  const destino = destinationSelect.value;

  if (!origem || !destino){
    alert("Selecione sua localização e o destino.");
    return;
  }

  if (origem === destino){
    alert("A origem e o destino são iguais. Escolha outro destino.");
    return;
  }

  const caminho = rotaMaisCurta(origem, destino);

  if (!caminho){
    statusEl.textContent = "Rota não encontrada";
    instructions.innerHTML = "<b>Orientação:</b> não foi possível encontrar uma rota entre os pontos selecionados.";
    return;
  }

  const coords = pontosDaRota(caminho);

  // Destaca a rota sobre os corredores do esboço.
  routePath.setAttribute("d", caminhoParaSvg(coords));
  routePath.setAttribute("opacity", "1");
  animarTrajetoria();

  const A = pontoAmbiente(origem);
  const B = pontoAmbiente(destino);

  player.setAttribute("cx", A[0]);
  player.setAttribute("cy", A[1]);
  player.setAttribute("opacity", "1");

  destinationMarker.setAttribute("cx", B[0]);
  destinationMarker.setAttribute("cy", B[1]);
  destinationMarker.setAttribute("opacity", "1");

  statusEl.textContent = "Rota encontrada";
  instructions.innerHTML = `<b>Orientação:</b> siga a rota destacada até <b>${nomeLocal(destino)}</b>.`;

  resultCard.classList.remove("hidden");
  resultTitle.textContent = `Vamos para ${nomeLocal(destino)}!`;
  resultText.textContent = "Siga o caminho destacado no mapa.";

  routeSteps.innerHTML = "";
  gerarPassos(caminho, origem, destino).forEach(texto => {
    const div = document.createElement("div");
    div.className = "routeStep";
    div.innerHTML = texto;
    routeSteps.appendChild(div);
  });

  mostrarPersonagem(destino);
  destinationSelect.focus();
}

function limpar(){
  originSelect.value = "";
  destinationSelect.value = "";
  statusEl.textContent = "Aguardando destino";
  instructions.innerHTML = "<b>Orientação:</b> escolha sua localização e o destino.";
  routePath.setAttribute("opacity","0");
  routePath.setAttribute("d","");
  pararAnimacaoTrajetoria();
  player.setAttribute("opacity","0");
  destinationMarker.setAttribute("opacity","0");
  resultCard.classList.add("hidden");
}

function alternarAcessibilidade(){
  const altoContraste = document.body.classList.toggle("high-contrast");
  document.body.classList.toggle("large-text", altoContraste);

  accessibilityBtn.setAttribute(
    "aria-label",
    altoContraste ? "Desativar modo de acessibilidade" : "Ativar modo de acessibilidade"
  );
  accessibilityBtn.title = altoContraste
    ? "Desativar modo de acessibilidade"
    : "Opções de acessibilidade";
}

preencherSelects();
desenharSegmentos();
desenharNos();

routeBtn.addEventListener("click", mostrarRota);
resetBtn.addEventListener("click", limpar);
accessibilityBtn.addEventListener("click", alternarAcessibilidade);

destinationSelect.addEventListener("change", () => {
  const destino = destinationSelect.value;
  if (!destino) return;

  const el = mapNodes.querySelector(`[data-id="${destino}"]`);
  if (el){
    mapNodes.querySelectorAll(".destination-node").forEach(n => n.classList.remove("destination-node"));
    el.classList.add("destination-node");
  }
});
