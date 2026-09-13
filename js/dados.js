/*
 * Campus Guia — mapa FAFRAM Campos 1
 *
 * Fonte única dos dados usados pela interface e pelo cálculo de rotas.
 * As coordenadas usam o mesmo espaço da imagem "mapa fafram campos1.png",
 * redimensionada no index.html para o viewBox 1560 x 815.
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

/* Caminhos base para qualquer renderização SVG alternativa ao mapa de referência. */
const caminhos = [
  "M760 638 L760 610 L760 535 L650 445 L555 360 L455 275 L330 220",
  "M650 445 L520 565 L430 470 L330 330 L240 230",
  "M760 535 L860 430 L970 430 L1080 430 L1190 430 L1290 430 L1400 430",
  "M860 430 L900 350 L1010 320 L1120 320 L1280 280 L1460 300 L1460 500",
  "M1290 430 L1330 540 L1400 580",
  "M760 535 L760 300 L850 220 L980 200 L1120 200 L1260 200 L1380 200 L1490 200 L1460 300"
];

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
  viewBox: { x: 0, y: 0, width: 1560, height: 815 },
  imagemReferencia: "mapa fafram campos1.png",
  locais,
  pontos,
  conexoes,
  ligaLocal,
  caminhos,
  areas,
  categorias
};

const locaisVisiveis = Object.keys(locais);
