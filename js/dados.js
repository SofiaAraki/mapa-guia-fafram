/* Campus Guia — dados editáveis do mapa.
 * Não há lógica de rota neste arquivo. O editor trabalha sobre estes dados. */

const CAMPUS_SVG = {
  width: 4033.94,
  height: 1846.6,
  oldWidth: 1560,
  oldHeight: 815,
  imagemReferencia: "campus1.svg"
};

const locais = {
  "entrada": {
    "nome": "Entrada",
    "x": 2040.4,
    "y": 1480,
    "tipo": "origem"
  },
  "portaria": {
    "nome": "Portaria",
    "x": 1831,
    "y": 1483.7,
    "tipo": "referencia"
  },
  "atendimento": {
    "nome": "Atendimento",
    "x": 2232.9,
    "y": 1491.2,
    "tipo": "referencia"
  },
  "fonte": {
    "nome": "Fonte",
    "x": 2039.5,
    "y": 1712.8,
    "tipo": "referencia"
  },
  "labEngenharia": {
    "nome": "Laboratório de Engenharia",
    "x": 587.8,
    "y": 225.4,
    "tipo": "referencia"
  },
  "cantina": {
    "nome": "Cantina",
    "x": 1053.6,
    "y": 285.5,
    "tipo": "referencia"
  },
  "lab3": {
    "nome": "Lab 3",
    "x": 527.7,
    "y": 646.1,
    "tipo": "referencia"
  },
  "lab2": {
    "nome": "Lab 2",
    "x": 594.4,
    "y": 714.7,
    "tipo": "referencia"
  },
  "lab1": {
    "nome": "Lab 1",
    "x": 664,
    "y": 790.3,
    "tipo": "referencia"
  },
  "lab4": {
    "nome": "Lab 4",
    "x": 674.2,
    "y": 1093,
    "tipo": "referencia"
  },
  "sala1": {
    "nome": "Sala 1",
    "x": 584.1,
    "y": 1168.2,
    "tipo": "referencia"
  },
  "sala2": {
    "nome": "Sala 2",
    "x": 1247.8,
    "y": 1322.7,
    "tipo": "referencia"
  },
  "sala3": {
    "nome": "Sala 3",
    "x": 1138.9,
    "y": 1210.8,
    "tipo": "referencia"
  },
  "sala4": {
    "nome": "Sala 4",
    "x": 1023.5,
    "y": 1100.5,
    "tipo": "referencia"
  },
  "sala5": {
    "nome": "Sala 5",
    "x": 1036.1,
    "y": 729.8,
    "tipo": "referencia"
  },
  "sala6": {
    "nome": "Sala 6",
    "x": 1169.2,
    "y": 581.6,
    "tipo": "referencia"
  },
  "sala7": {
    "nome": "Sala 7",
    "x": 1399.1,
    "y": 569.5,
    "tipo": "referencia"
  },
  "sala8": {
    "nome": "Sala 8",
    "x": 1514.1,
    "y": 681.4,
    "tipo": "referencia"
  },
  "patioEsquerdo": {
    "nome": "Pátio",
    "x": 858.2,
    "y": 469.5,
    "tipo": "referencia"
  },
  "patioCentral": {
    "nome": "Pátio",
    "x": 1744,
    "y": 599.7,
    "tipo": "referencia"
  },
  "banheirosEsquerda": {
    "nome": "Banheiros",
    "x": 847,
    "y": 916.5,
    "tipo": "referencia"
  },
  "salaProfessores": {
    "nome": "Sala dos professores",
    "x": 1650.2,
    "y": 802.4,
    "tipo": "referencia"
  },
  "banheiroFeminino": {
    "nome": "Banheiro feminino",
    "x": 1946.6,
    "y": 920.4,
    "tipo": "referencia"
  },
  "banheiroMasculino": {
    "nome": "Banheiro masculino",
    "x": 2100.9,
    "y": 1074.7,
    "tipo": "referencia"
  },
  "cozinha": {
    "nome": "Cozinha",
    "x": 2100.9,
    "y": 935.5,
    "tipo": "referencia"
  },
  "salaoNobre": {
    "nome": "Salão nobre",
    "x": 1931.5,
    "y": 1086.8,
    "tipo": "referencia"
  },
  "diretoria": {
    "nome": "Diretoria",
    "x": 1623,
    "y": 1180.6,
    "tipo": "referencia"
  },
  "secretaria": {
    "nome": "Secretaria",
    "x": 1492.9,
    "y": 1322.7,
    "tipo": "referencia"
  },
  "sala10": {
    "nome": "Sala 10",
    "x": 1744,
    "y": 273,
    "tipo": "referencia"
  },
  "sala11": {
    "nome": "Sala 11",
    "x": 2100.9,
    "y": 279.1,
    "tipo": "referencia"
  },
  "biblioteca": {
    "nome": "Biblioteca",
    "x": 2439.7,
    "y": 273,
    "tipo": "referencia"
  },
  "banheiros": {
    "nome": "Banheiros",
    "x": 2730.1,
    "y": 288.1,
    "tipo": "referencia"
  },
  "sala25": {
    "nome": "Sala 25",
    "x": 3029.6,
    "y": 285.1,
    "tipo": "referencia"
  },
  "sala18": {
    "nome": "Sala 18",
    "x": 2584.9,
    "y": 675.4,
    "tipo": "referencia"
  },
  "sala20": {
    "nome": "Sala 20",
    "x": 2382.2,
    "y": 881.1,
    "tipo": "referencia"
  },
  "sala19": {
    "nome": "Sala 19",
    "x": 2488.1,
    "y": 778.2,
    "tipo": "referencia"
  },
  "sala17": {
    "nome": "Sala 17",
    "x": 2790.6,
    "y": 702.6,
    "tipo": "referencia"
  },
  "sala16": {
    "nome": "Sala 16",
    "x": 2929.8,
    "y": 847.8,
    "tipo": "referencia"
  },
  "sala12": {
    "nome": "Sala 12",
    "x": 2391.3,
    "y": 1232,
    "tipo": "referencia"
  },
  "sala13": {
    "nome": "Sala 13",
    "x": 2566.8,
    "y": 1404.4,
    "tipo": "referencia"
  },
  "sala15": {
    "nome": "Sala 15",
    "x": 2954,
    "y": 1238,
    "tipo": "referencia"
  },
  "sala14": {
    "nome": "Sala 14",
    "x": 2793.7,
    "y": 1395.3,
    "tipo": "referencia"
  },
  "sala21": {
    "nome": "Sala 21",
    "x": 3362.4,
    "y": 908.3,
    "tipo": "referencia"
  },
  "sala22": {
    "nome": "Sala 22",
    "x": 3444,
    "y": 835.7,
    "tipo": "referencia"
  },
  "sala23": {
    "nome": "Sala 23",
    "x": 3362.4,
    "y": 1201.7,
    "tipo": "referencia"
  },
  "sala24": {
    "nome": "Sala 24",
    "x": 3444,
    "y": 1286.4,
    "tipo": "referencia"
  },
  "banheirosDireita": {
    "nome": "Banheiros",
    "x": 3168.8,
    "y": 1056.5,
    "tipo": "referencia"
  },
  "rampa2": {
    "nome": "Rampa 2º andar",
    "x": 3534.8,
    "y": 563.4,
    "tipo": "referencia"
  },
  "escada2": {
    "nome": "Escada 2º andar",
    "x": 3283.7,
    "y": 1343.9,
    "tipo": "referencia"
  },
  "sala40": {
    "nome": "Sala 40",
    "x": 3964.4,
    "y": 596.7,
    "tipo": "referencia"
  },
  "sala41": {
    "nome": "Sala 41",
    "x": 3967.4,
    "y": 796.4,
    "tipo": "referencia"
  },
  "sala42": {
    "nome": "Sala 42",
    "x": 3973.4,
    "y": 990,
    "tipo": "referencia"
  },
  "sala43": {
    "nome": "Sala 43",
    "x": 3970.4,
    "y": 1177.5,
    "tipo": "referencia"
  },
  "sala44": {
    "nome": "Sala 44",
    "x": 3973.4,
    "y": 1543.6,
    "tipo": "referencia"
  },
  "sala49": {
    "nome": "Sala 49",
    "x": 3447.1,
    "y": 1555.7,
    "tipo": "referencia"
  },
  "sala48": {
    "nome": "Sala 48",
    "x": 3577.2,
    "y": 1558.7,
    "tipo": "referencia"
  },
  "sala47": {
    "nome": "Sala 47",
    "x": 3710.3,
    "y": 1561.7,
    "tipo": "referencia"
  },
  "sala46": {
    "nome": "Sala 46",
    "x": 3843.4,
    "y": 1558.7,
    "tipo": "referencia"
  },
  "sala45": {
    "nome": "Sala 45",
    "x": 3967.4,
    "y": 1386.3,
    "tipo": "referencia"
  },
  "banheiros2": {
    "nome": "Banheiros",
    "x": 3731.4,
    "y": 1334.8,
    "tipo": "referencia"
  },
  "sala50": {
    "nome": "Sala 50",
    "x": 3347.2,
    "y": 1555.7,
    "tipo": "referencia"
  }
};

const categorias = {
  "Entrada e serviços": [
    "entrada",
    "portaria",
    "atendimento",
    "fonte"
  ],
  "Laboratórios": [
    "labEngenharia",
    "cantina",
    "lab1",
    "lab2",
    "lab3",
    "lab4"
  ],
  "Salas 01–08": [
    "sala1",
    "sala2",
    "sala3",
    "sala4",
    "sala5",
    "sala6",
    "sala7",
    "sala8"
  ],
  "Áreas centrais": [
    "patioEsquerdo",
    "patioCentral",
    "banheirosEsquerda",
    "salaProfessores",
    "banheiroFeminino",
    "banheiroMasculino",
    "cozinha",
    "salaoNobre",
    "diretoria",
    "secretaria"
  ],
  "Salas e serviços": [
    "sala10",
    "sala11",
    "biblioteca",
    "banheiros",
    "sala25"
  ],
  "Salas 12–24": [
    "sala12",
    "sala13",
    "sala14",
    "sala15",
    "sala16",
    "sala17",
    "sala18",
    "sala19",
    "sala20",
    "sala21",
    "sala22",
    "sala23",
    "sala24",
    "banheirosDireita"
  ],
  "2º andar": [
    "rampa2",
    "escada2",
    "banheiros2",
    "sala40",
    "sala41",
    "sala42",
    "sala43",
    "sala44",
    "sala45",
    "sala46",
    "sala47",
    "sala48",
    "sala49",
    "sala50"
  ]
};

const segmentosAzuis = [
  [
    [
      860.65,
      1273.55
    ],
    [
      1334.27,
      801.67
    ]
  ],
  [
    [
      3362.5,
      1647.91
    ],
    [
      3890.77,
      1649.14
    ]
  ],
  [
    [
      1674.22,
      1226.04
    ],
    [
      2061.18,
      1614.75
    ]
  ],
  [
    [
      2006.69,
      900.58
    ],
    [
      2634.84,
      1530.56
    ]
  ],
  [
    [
      1409.56,
      1433.93
    ],
    [
      2191.94,
      653.39
    ]
  ],
  [
    [
      2062.6,
      1549.26
    ],
    [
      2636.56,
      977.11
    ]
  ],
  [
    [
      605.25,
      695.04
    ],
    [
      1406.83,
      1498.49
    ]
  ],
  [
    [
      1337.78,
      864.13
    ],
    [
      1626.58,
      1154.65
    ]
  ],
  [
    [
      472.39,
      1331.96
    ],
    [
      1271.48,
      534.73
    ]
  ],
  [
    [
      1322.33,
      1858.39
    ],
    [
      1782.5,
      1400
    ]
  ],
  [
    [
      538.1,
      694.58
    ],
    [
      983.26,
      251.18
    ]
  ],
  [
    [
      416.51,
      889.5
    ],
    [
      1320.23,
      1795.09
    ]
  ],
  [
    [
      2637.47,
      909.33
    ],
    [
      3141.38,
      1415.02
    ]
  ],
  [
    [
      3207.88,
      1414.02
    ],
    [
      3548.86,
      1074.76
    ]
  ],
  [
    [
      3194.29,
      1101.12
    ],
    [
      3547.71,
      1456.26
    ]
  ],
  [
    [
      3182.27,
      1072.48
    ],
    [
      3183.48,
      687.13
    ]
  ],
  [
    [
      2632.34,
      1597.18
    ],
    [
      3194.28,
      1037.04
    ]
  ],
  [
    [
      3843.97,
      1602.95
    ],
    [
      3845.24,
      821.04
    ]
  ],
  [
    [
      1456.83,
      640.43
    ],
    [
      2191.94,
      641
    ]
  ],
  [
    [
      2191.94,
      641
    ],
    [
      3229.03,
      641.78
    ]
  ],
  [
    [
      986.72,
      187.03
    ],
    [
      1789.06,
      991.24
    ]
  ]
];

/*
 * Rede de navegação editável.
 * Cada ponto pode ser reposicionado pelo editor e cada conexão pode ser
 * criada/removida sem alterar o código do sistema.
 */
const pontosPassagem = {
  "p1": [
    2030.4,
    1359.5
  ],
  "p2": [
    1817.6,
    1154.3
  ],
  "p3": [
    1360.8,
    1609.6
  ],
  "p4": [
    822.9,
    1087.8
  ],
  "p5": [
    664.3,
    934.5
  ],
  "p6": [
    494.8,
    1087.8
  ],
  "p7": [
    446.4,
    708.6
  ],
  "p8": [
    853.9,
    728.8
  ],
  "p9": [
    567.4,
    454.5
  ],
  "p10": [
    707.3,
    310.6
  ],
  "p11": [
    1277.4,
    301.2
  ],
  "p12": [
    1019.2,
    902.3
  ],
  "p13": [
    1301.6,
    622.6
  ],
  "p14": [
    1649.3,
    979.1
  ],
  "p15": [
    1366.2,
    1253.2
  ],
  "p16": [
    1415.9,
    426.3
  ],
  "p17": [
    2186.4,
    430.5
  ],
  "p18": [
    1972.6,
    664.3
  ],
  "p19": [
    2358.5,
    1039.4
  ],
  "p20": [
    3180.1,
    434.3
  ],
  "p21": [
    3186.8,
    555.3
  ],
  "p22": [
    3833.6,
    551.3
  ],
  "p23": [
    3841.7,
    1426.7
  ],
  "p24": [
    3383.1,
    1437.4
  ],
  "p25": [
    3176.1,
    1225
  ],
  "p26": [
    3361.6,
    1060.9
  ],
  "p27": [
    3518.9,
    894.2
  ],
  "p28": [
    3523,
    1221
  ],
  "p29": [
    3176.1,
    859.2
  ],
  "p30": [
    2982.4,
    1039.4
  ],
  "p31": [
    2671.8,
    732.8
  ],
  "p32": [
    2670.5,
    1357.2
  ],
  "p33": [
    583.6,
    1007.2
  ],
  "p34": [
    515,
    773.2
  ],
  "p35": [
    594.3,
    851.2
  ],
  "p36": [
    1116.1,
    470.6
  ],
  "p37": [
    1183.3,
    738.2
  ],
  "p38": [
    1229,
    1112
  ],
  "p39": [
    1104,
    995.1
  ],
  "p40": [
    1438.8,
    762.4
  ],
  "p41": [
    1554.4,
    875.4
  ],
  "p42": [
    1535.6,
    1095.9
  ],
  "p43": [
    1831.4,
    800.1
  ],
  "p44": [
    2170.3,
    856.6
  ],
  "p45": [
    2221.4,
    1176.6
  ],
  "p46": [
    2509.1,
    1195.4
  ],
  "p47": [
    2499.7,
    894.2
  ],
  "p48": [
    2856,
    918.4
  ],
  "p49": [
    1740,
    428.9
  ],
  "p50": [
    2453.8,
    430.5
  ],
  "p51": [
    2729.6,
    428.9
  ],
  "p52": [
    3022.8,
    428.9
  ],
  "p53": [
    3843,
    789.3
  ],
  "p54": [
    3848.4,
    980.3
  ],
  "p55": [
    3845.7,
    1171.2
  ],
  "p56": [
    3713.9,
    1440.1
  ],
  "p57": [
    3584.8,
    1437.4
  ],
  "p58": [
    3458.4,
    1440.1
  ],
  "p59": [
    2857.4,
    1168.5
  ],
  "p60": [
    2035.8,
    1580
  ]
};

const conexoesMapa = [
  [
    "p60",
    "p1"
  ],
  [
    "p1",
    "p2"
  ],
  [
    "p3",
    "p2"
  ],
  [
    "p2",
    "p14"
  ],
  [
    "p14",
    "p42"
  ],
  [
    "p42",
    "p15"
  ],
  [
    "p15",
    "p38"
  ],
  [
    "p38",
    "p39"
  ],
  [
    "p39",
    "p12"
  ],
  [
    "p3",
    "p4"
  ],
  [
    "p4",
    "p12"
  ],
  [
    "p12",
    "p37"
  ],
  [
    "p37",
    "p13"
  ],
  [
    "p13",
    "p40"
  ],
  [
    "p40",
    "p41"
  ],
  [
    "p41",
    "p14"
  ],
  [
    "p14",
    "p43"
  ],
  [
    "p43",
    "p18"
  ],
  [
    "p18",
    "p44"
  ],
  [
    "p44",
    "p19"
  ],
  [
    "p19",
    "p45"
  ],
  [
    "p45",
    "p1"
  ],
  [
    "p4",
    "p5"
  ],
  [
    "p5",
    "p33"
  ],
  [
    "p33",
    "p6"
  ],
  [
    "p5",
    "p35"
  ],
  [
    "p35",
    "p34"
  ],
  [
    "p34",
    "p7"
  ],
  [
    "p5",
    "p8"
  ],
  [
    "p8",
    "p9"
  ],
  [
    "p9",
    "p10"
  ],
  [
    "p8",
    "p36"
  ],
  [
    "p36",
    "p11"
  ],
  [
    "p11",
    "p16"
  ],
  [
    "p16",
    "p49"
  ],
  [
    "p49",
    "p17"
  ],
  [
    "p17",
    "p50"
  ],
  [
    "p50",
    "p51"
  ],
  [
    "p51",
    "p52"
  ],
  [
    "p52",
    "p20"
  ],
  [
    "p21",
    "p20"
  ],
  [
    "p21",
    "p22"
  ],
  [
    "p22",
    "p53"
  ],
  [
    "p53",
    "p54"
  ],
  [
    "p54",
    "p55"
  ],
  [
    "p55",
    "p23"
  ],
  [
    "p23",
    "p56"
  ],
  [
    "p56",
    "p57"
  ],
  [
    "p57",
    "p58"
  ],
  [
    "p58",
    "p24"
  ],
  [
    "p24",
    "p25"
  ],
  [
    "p25",
    "p26"
  ],
  [
    "p26",
    "p28"
  ],
  [
    "p26",
    "p27"
  ],
  [
    "p26",
    "p29"
  ],
  [
    "p29",
    "p21"
  ],
  [
    "p29",
    "p30"
  ],
  [
    "p25",
    "p30"
  ],
  [
    "p30",
    "p59"
  ],
  [
    "p59",
    "p32"
  ],
  [
    "p32",
    "p46"
  ],
  [
    "p46",
    "p19"
  ],
  [
    "p19",
    "p47"
  ],
  [
    "p47",
    "p31"
  ],
  [
    "p31",
    "p48"
  ],
  [
    "p48",
    "p30"
  ],
  [
    "p18",
    "p17"
  ]
];

const retangulares = new Set([
  "labEngenharia",
  "cantina",
  "sala11",
  "biblioteca",
  "banheiros",
  "sala25",
  "rampa2",
  "escada2",
  "sala40",
  "sala41",
  "sala42",
  "sala43",
  "sala44",
  "sala45",
  "sala46",
  "sala47",
  "sala48",
  "sala49",
  "portaria",
  "entrada",
  "atendimento",
  "diretoria",
  "secretaria"
]);
