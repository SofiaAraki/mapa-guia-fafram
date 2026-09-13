/*
 * Pontos do mapa.
 * As coordenadas foram organizadas seguindo o esboço enviado:
 * entrada na parte inferior, salas 01-08 à esquerda,
 * áreas centrais, salas 12-24 à direita e salas 40-49 no 2º andar.
 */

const locais = {
  entrada: {nome:"Entrada", x:710, y:730, tipo:"origem"},
  portaria: {nome:"Portaria", x:565, y:730},
  atendimento: {nome:"Atendimento", x:865, y:730},
  fonte: {nome:"Fonte", x:710, y:805},

  labEngenharia: {nome:"Laboratório de Engenharia", x:145, y:130},
  lab3: {nome:"Lab 3", x:142, y:297},
  lab2: {nome:"Lab 2", x:232, y:352},
  lab1: {nome:"Lab 1", x:325, y:415},
  lab4: {nome:"Lab 4", x:220, y:525},

  sala1: {nome:"Sala 1", x:295, y:550},
  sala2: {nome:"Sala 2", x:380, y:605},
  sala3: {nome:"Sala 3", x:440, y:520},
  sala4: {nome:"Sala 4", x:400, y:445},
  sala5: {nome:"Sala 5", x:455, y:380},
  sala6: {nome:"Sala 6", x:535, y:325},
  sala7: {nome:"Sala 7", x:620, y:350},
  sala8: {nome:"Sala 8", x:665, y:415},

  patioEsquerdo: {nome:"Pátio esquerdo", x:330, y:245},
  patioCentral: {nome:"Pátio central", x:630, y:300},
  patioDireito: {nome:"Pátio direito", x:1110, y:585},

  salaProfessores: {nome:"Sala dos professores", x:820, y:280},
  banheiroFeminino: {nome:"Banheiro feminino", x:885, y:230},
  banheiroMasculino: {nome:"Banheiro masculino", x:945, y:290},
  cozinha: {nome:"Cozinha", x:922, y:352},
  salaoNobre: {nome:"Salão nobre", x:700, y:550},

  sala11: {nome:"Sala 11", x:917, y:120},
  biblioteca: {nome:"Biblioteca", x:1052, y:120},
  banheiros: {nome:"Banheiros", x:1187, y:120},
  sala25: {nome:"Sala 25", x:1322, y:120},

  sala12: {nome:"Sala 12", x:1080, y:470},
  sala13: {nome:"Sala 13", x:1140, y:520},
  sala18: {nome:"Sala 18", x:1010, y:280},
  sala20: {nome:"Sala 20", x:1080, y:335},
  sala19: {nome:"Sala 19", x:1110, y:415},
  sala17: {nome:"Sala 17", x:1160, y:300},
  sala16: {nome:"Sala 16", x:1210, y:370},
  sala15: {nome:"Sala 15", x:1245, y:455},
  sala14: {nome:"Sala 14", x:1300, y:525},
  sala23: {nome:"Sala 23", x:1370, y:450},
  sala24: {nome:"Sala 24", x:1350, y:550},

  rampa2: {nome:"Rampa 2º andar", x:1340, y:230},
  escada2: {nome:"Escada 2º andar", x:1240, y:635},

  sala40: {nome:"Sala 40", x:1392, y:288},
  sala41: {nome:"Sala 41", x:1392, y:353},
  sala42: {nome:"Sala 42", x:1392, y:418},
  sala43: {nome:"Sala 43", x:1392, y:483},
  sala44: {nome:"Sala 44", x:1392, y:548},
  sala45: {nome:"Sala 45", x:1262, y:710},
  sala46: {nome:"Sala 46", x:1207, y:710},
  sala47: {nome:"Sala 47", x:1152, y:710},
  sala48: {nome:"Sala 48", x:1382, y:635},
  sala49: {nome:"Sala 49", x:1327, y:635},

  areaVerde1: {nome:"Área verde 1", x:145, y:340},
  areaVerde2: {nome:"Área verde 2", x:475, y:225},
  areaVerde3: {nome:"Área verde 3", x:1060, y:230},
  areaVerde4: {nome:"Área verde 4", x:1085, y:525},
  areaVerde5: {nome:"Área verde 5", x:1375, y:335}
};

const categorias = {
  "Entrada e serviços": ["entrada","portaria","atendimento","fonte"],
  "Laboratórios": ["labEngenharia","lab1","lab2","lab3","lab4"],
  "Salas 01–08": ["sala1","sala2","sala3","sala4","sala5","sala6","sala7","sala8"],
  "Áreas centrais": ["patioEsquerdo","patioCentral","salaProfessores","banheiroFeminino","banheiroMasculino","cozinha","salaoNobre"],
  "Salas e serviços": ["sala11","biblioteca","banheiros","sala25"],
  "Salas 12–24": ["sala12","sala13","sala14","sala15","sala16","sala17","sala18","sala19","sala20","sala23","sala24"],
  "2º andar": ["rampa2","escada2","sala40","sala41","sala42","sala43","sala44","sala45","sala46","sala47","sala48","sala49"]
};

/*
 * Pontos intermediários do grafo.
 * Eles permitem que a rota siga os corredores do esboço.
 */
const pontos = {
  entradaJ: [710,730],
  j1: [710,640],
  j2: [710,560],
  j3: [620,500],
  j4: [530,430],
  j5: [440,350],
  j6: [360,270],
  j7: [300,210],
  left1: [350,680],
  left2: [260,680],
  left3: [190,610],
  left4: [290,570],
  left5: [235,480],
  left6: [180,390],
  left7: [130,310],
  center1: [440,620],
  center2: [390,520],
  center3: [350,430],
  center4: [310,340],
  center5: [270,250],
  right1: [720,500],
  right2: [820,500],
  right3: [920,500],
  right4: [1030,500],
  right5: [1130,500],
  rA: [870,420],
  rB: [820,350],
  rC: [770,290],
  rD: [1080,410],
  rE: [1140,340],
  rF: [1200,270],
  rG: [1200,570],
  rH: [1280,650],
  rI: [1350,650],
  top0: [710,220],
  top1: [800,180],
  top2: [900,140],
  top3: [1010,140],
  top4: [1120,140],
  top5: [1230,140],
  top6: [1340,140],
  rightEnd: [1380,360],
  rightBottom: [1380,650]
};

const conexoes = [
  ["entrada","entradaJ"],["entradaJ","j1"],["j1","j2"],["j2","j3"],["j3","j4"],["j4","j5"],["j5","j6"],["j6","j7"],
  ["j3","left1"],["left1","left2"],["left2","left3"],
  ["left1","left4"],["left4","left5"],["left5","left6"],["left6","left7"],
  ["j4","center1"],["center1","center2"],["center2","center3"],["center3","center4"],["center4","center5"],
  ["j3","right1"],["right1","right2"],["right2","right3"],["right3","right4"],["right4","right5"],
  ["right3","rA"],["rA","rB"],["rB","rC"],
  ["right4","rD"],["rD","rE"],["rE","rF"],
  ["right5","rG"],["rG","rH"],["rH","rI"],
  ["j2","top0"],["top0","top1"],["top1","top2"],["top2","top3"],["top3","top4"],["top4","top5"],["top5","top6"],
  ["top6","rightEnd"],["rightEnd","rightBottom"]
];

const ligaLocal = {
  portaria:"entrada", atendimento:"entrada",
  labEngenharia:"j7", lab3:"left7", lab2:"left6", lab1:"left5", lab4:"left3",
  sala1:"left3", sala2:"left1", sala3:"center1", sala4:"center2", sala5:"center3",
  sala6:"center4", sala7:"j6", sala8:"j5",
  patioEsquerdo:"j6", patioCentral:"top0", salaProfessores:"rC",
  banheiroFeminino:"rC", banheiroMasculino:"rB", cozinha:"rB", salaoNobre:"right3",
  sala11:"top2", biblioteca:"top3", banheiros:"top4", sala25:"top6",
  sala18:"rA", sala20:"rD", sala19:"right5", sala17:"rE", sala16:"rF",
  sala12:"right3", sala13:"right5", sala15:"rG", sala14:"rH", sala23:"rightEnd", sala24:"rightBottom",
  rampa2:"top6", escada2:"rG",
  sala40:"rightEnd", sala41:"rightEnd", sala42:"rightEnd", sala43:"rightEnd", sala44:"rightEnd",
  sala45:"rH", sala46:"rH", sala47:"rG", sala48:"rightBottom", sala49:"rH",
  areaVerde1:"left6", areaVerde2:"top0", areaVerde3:"rE", areaVerde4:"rG", areaVerde5:"rightEnd",
  fonte:"entradaJ",
  patioDireito:"rG",
  labEngenharia:"j7"
};

// Pontos que aparecem nos selects como destinos/origens.
const locaisVisiveis = Object.keys(locais).filter(id =>
  !id.startsWith("areaVerde")
);
