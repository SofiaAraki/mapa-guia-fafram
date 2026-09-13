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

function rotaMaisCurta(origem, destino){
  const g = grafoCompleto();

  if (!g[origem] || !g[destino]) return null;

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
      const nova = dist[atual] + distancia(atual, vizinho);
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
