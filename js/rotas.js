/* Cálculo de rotas — não conhece HTML nem SVG. */

function grafoCompleto() {
  const grafo = {};

  Object.keys(pontos).forEach(id => { grafo[id] = []; });
  Object.keys(locais).forEach(id => { grafo[id] ||= []; });

  conexoes.forEach(([a, b]) => {
    if (!grafo[a]) grafo[a] = [];
    if (!grafo[b]) grafo[b] = [];
    grafo[a].push(b);
    grafo[b].push(a);
  });

  Object.entries(ligaLocal).forEach(([local, acesso]) => {
    grafo[local] ||= [];
    grafo[acesso] ||= [];
    grafo[local].push(acesso);
    grafo[acesso].push(local);
  });

  return grafo;
}

function rotaMaisCurta(origem, destino) {
  const grafo = grafoCompleto();
  if (!grafo[origem] || !grafo[destino]) return null;

  const distancias = Object.fromEntries(Object.keys(grafo).map(id => [id, Infinity]));
  const anteriores = {};
  const visitados = new Set();
  distancias[origem] = 0;

  while (visitados.size < Object.keys(grafo).length) {
    let atual = null;
    let menor = Infinity;

    Object.keys(grafo).forEach(id => {
      if (!visitados.has(id) && distancias[id] < menor) {
        menor = distancias[id];
        atual = id;
      }
    });

    if (!atual) break;
    if (atual === destino) break;
    visitados.add(atual);

    grafo[atual].forEach(vizinho => {
      const novaDistancia = distancias[atual] + distancia(atual, vizinho);
      if (novaDistancia < distancias[vizinho]) {
        distancias[vizinho] = novaDistancia;
        anteriores[vizinho] = atual;
      }
    });
  }

  if (distancias[destino] === Infinity) return null;

  const caminho = [];
  let atual = destino;

  while (atual !== undefined) {
    caminho.unshift(atual);
    if (atual === origem) break;
    atual = anteriores[atual];
  }

  return caminho[0] === origem ? caminho : null;
}

function pontosDaRota(caminho) {
  return caminho
    .map(ponto)
    .filter(Boolean)
    .filter((point, index, points) =>
      index === 0 || point[0] !== points[index - 1][0] || point[1] !== points[index - 1][1]
    );
}
