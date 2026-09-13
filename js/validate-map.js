const fs = require('fs');
const vm = require('vm');

const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync('js/dados.js', 'utf8'), context, { filename: 'js/dados.js' });
vm.runInContext(fs.readFileSync('js/rotas.js', 'utf8'), context, { filename: 'js/rotas.js' });
vm.runInContext(
  'globalThis.__data = { locais, pontos, conexoes, ligaLocal, categorias, segmentosAzuis, rotaMaisCurta };',
  context,
  { filename: 'export-data.js' }
);

const { locais, pontos, conexoes, ligaLocal, categorias, segmentosAzuis, rotaMaisCurta } = context.__data;
const errors = [];

for (const [id, local] of Object.entries(locais)) {
  if (!Number.isFinite(local.x) || !Number.isFinite(local.y)) errors.push(`coordenada inválida: ${id}`);
  if (!ligaLocal[id] && id !== 'entrada') errors.push(`local sem ligação: ${id}`);
  if (ligaLocal[id] && !pontos[ligaLocal[id]]) errors.push(`ligação aponta para nó inexistente: ${id} -> ${ligaLocal[id]}`);
}

for (const [a, b] of conexoes) {
  if (!locais[a] && !pontos[a]) errors.push(`conexão aponta para origem inexistente: ${a}`);
  if (!locais[b] && !pontos[b]) errors.push(`conexão aponta para destino inexistente: ${b}`);
}

for (const id of Object.values(categorias).flat()) {
  if (!locais[id]) errors.push(`categoria aponta para local inexistente: ${id}`);
}

const ids = Object.keys(locais);
function distanciaSegmento(point, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(point[0] - (a[0] + t * dx), point[1] - (a[1] + t * dy));
}
function segmentoAzul(a, b) {
  const meio = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const direto = segmentosAzuis.some(([inicio, fim]) => distanciaSegmento(a, inicio, fim) < 2 && distanciaSegmento(b, inicio, fim) < 2 && distanciaSegmento(meio, inicio, fim) < 20);
  const junta = Math.hypot(a[0] - b[0], a[1] - b[1]) <= 270 &&
    segmentosAzuis.some(([inicio, fim]) => distanciaSegmento(a, inicio, fim) < 25) &&
    segmentosAzuis.some(([inicio, fim]) => distanciaSegmento(b, inicio, fim) < 25) &&
    segmentosAzuis.some(([inicio, fim]) => distanciaSegmento(meio, inicio, fim) < 110);
  return direto || junta;
}
for (const [a, b] of conexoes) {
  if (pontos[a] && pontos[b] && !segmentoAzul(pontos[a], pontos[b])) {
    errors.push(`segmento fora do corredor azul: ${a} -> ${b}`);
  }
}
let unreachable = 0;
for (const origem of ids) {
  for (const destino of ids) {
    if (origem === destino) continue;
    if (!rotaMaisCurta(origem, destino)) unreachable++;
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

if (unreachable) {
  console.error(`${unreachable} pares de locais sem rota`);
  process.exit(1);
}

console.log(`OK: ${ids.length} locais, ${Object.keys(pontos).length} nós, ${conexoes.length} conexões; todas as rotas são alcançáveis.`);
