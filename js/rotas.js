function ponto(id){
  if (locais[id]) return locais[id].rota || [locais[id].x, locais[id].y];
  if (pontos[id]) return pontos[id];
  return null;
}

function pontoAmbiente(id){
  if (!locais[id]) return ponto(id);
  return [locais[id].x, locais[id].y];
}

function grafoCompleto(){
  const g = {};

  Object.keys(pontos).forEach(id => g[id] = []);
  Object.keys(locais).forEach(id => g[id] = g[id] || []);

  conexoes.forEach(([a,b]) => {
    g[a].push(b);
    g[b].push(a);
  });

  Object.entries(ligaLocal).forEach(([local, junction]) => {
    if (!g[local]) g[local] = [];
    if (!g[junction]) g[junction] = [];
    g[local].push(junction);
    g[junction].push(local);
  });

  return g;
}

function distancia(a,b){
  const A = ponto(a), B = ponto(b);
  if (!A || !B) return Infinity;
  return Math.hypot(A[0]-B[0], A[1]-B[1]);
}

const salasBlocoSuperiorTerreo = new Set(["sala11", "biblioteca", "banheiros", "sala25"]);
const locaisSegundoAndar = new Set(["rampa2", "escada2", "sala40", "sala41", "sala42", "sala43", "sala44", "sala45", "sala46", "sala47", "sala48", "sala49"]);

function penalidadePassagem(no, destino, origem){
  if (!salasBlocoSuperiorTerreo.has(destino) || locaisSegundoAndar.has(origem)) return 0;
  const coordenada = ponto(no);
  /* Este intervalo é o nó de entrada do corredor vertical das salas 40–45.
   * O nó c46, em x≈3229, é diferente: ele pertence ao corredor horizontal
   * do térreo e deve continuar liberado para Sala 25. */
  return coordenada && coordenada[0] > 3150 && coordenada[0] < 3200 && coordenada[1] > 600 ? 1000000000 : 0;
}

function rotaMaisCurta(origem, destino){
  const g = grafoCompleto();

  if (!g[origem] || !g[destino]) return null;

  /* Para salas do bloco superior térreo, fixa-se o último trecho no eixo
   * horizontal. Isso impede que a busca escolha a entrada vertical das salas
   * 40–45 por ser geometricamente menor. */
  if (salasBlocoSuperiorTerreo.has(destino) && !locaisSegundoAndar.has(origem)) {
    const acesso = ligaLocal[destino];
    const ancoras = (g[acesso] || []).filter(id => id !== destino);
    const ancora = destino === "sala25"
      ? "c45"
      : ancoras.sort((a, b) => ponto(a)[0] - ponto(b)[0])[0];
    if (ancora) {
      const ateAncora = rotaMaisCurta(origem, ancora);
      if (ateAncora) return [...ateAncora, acesso, destino];
    }
  }

  // Dijkstra simples: o mapa usa distâncias geométricas.
  const dist = {};
  const anterior = {};
  const visitados = new Set();
  Object.keys(g).forEach(id => dist[id] = Infinity);
  dist[origem] = 0;

  while (visitados.size < Object.keys(g).length){
    let atual = null;
    let menor = Infinity;

    for (const id of Object.keys(g)){
      if (!visitados.has(id) && dist[id] < menor){
        menor = dist[id];
        atual = id;
      }
    }

    if (!atual) break;
    if (atual === destino) break;

    visitados.add(atual);

    for (const vizinho of g[atual]){
      const nova = dist[atual] + distancia(atual, vizinho) + penalidadePassagem(vizinho, destino, origem);
      if (nova < dist[vizinho]){
        dist[vizinho] = nova;
        anterior[vizinho] = atual;
      }
    }
  }

  if (dist[destino] === Infinity) return null;

  const caminho = [];
  let atual = destino;

  while (atual !== undefined){
    caminho.unshift(atual);
    if (atual === origem) break;
    atual = anterior[atual];
  }

  return caminho;
}

function pontosDaRota(caminho){
  return caminho.map(id => ponto(id)).filter(Boolean);
}
