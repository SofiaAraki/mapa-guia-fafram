const fs = require("fs");
const vm = require("vm");

const context = { console };
vm.createContext(context);
for (const arquivo of ["js/dados.js", "js/mapa.js", "js/rotas.js"]) {
  vm.runInContext(fs.readFileSync(arquivo, "utf8"), context, { filename: arquivo });
}
vm.runInContext("globalThis.__data = { locais, pontos, conexoes, ligaLocal, categorias, segmentosAzuis, rotaMaisCurta };", context);

const { locais, pontos, conexoes, ligaLocal, categorias, segmentosAzuis, rotaMaisCurta } = context.__data;
const erros = [];

for (const [id, local] of Object.entries(locais)) {
  if (!Number.isFinite(local.x) || !Number.isFinite(local.y)) erros.push(`coordenada inválida: ${id}`);
  if (!ligaLocal[id]) erros.push(`local sem ligação: ${id}`);
  if (ligaLocal[id] && !pontos[ligaLocal[id]]) erros.push(`ligação aponta para nó inexistente: ${id}`);
}

for (const [a, b] of conexoes) {
  if (!pontos[a] && !locais[a]) erros.push(`conexão aponta para origem inexistente: ${a}`);
  if (!pontos[b] && !locais[b]) erros.push(`conexão aponta para destino inexistente: ${b}`);
}

for (const id of Object.values(categorias).flat()) {
  if (!locais[id]) erros.push(`categoria aponta para local inexistente: ${id}`);
}

for (const [a, b] of segmentosAzuis) {
  if (!Array.isArray(a) || !Array.isArray(b)) erros.push("segmento de corredor inválido");
}

let semRota = 0;
for (const origem of Object.keys(locais)) {
  for (const destino of Object.keys(locais)) {
    if (origem !== destino && !rotaMaisCurta(origem, destino)) semRota++;
  }
}

if (erros.length) {
  console.error(erros.join("\n"));
  process.exit(1);
}
if (semRota) {
  console.error(`${semRota} pares de locais sem rota`);
  process.exit(1);
}
console.log(`OK: ${Object.keys(locais).length} locais, ${Object.keys(pontos).length} nós, ${conexoes.length} conexões; todas as rotas são alcançáveis.`);
