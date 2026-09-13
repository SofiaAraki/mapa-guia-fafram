/*
 * Campus Guia — dados.js
 *
 * FONTE ÚNICA DOS DADOS DO MAPA
 * --------------------------------
 * O index.html não deve conter coordenadas dos ambientes ou dos
 * corredores. Este arquivo concentra:
 *
 * 1. geometria visual dos ambientes;
 * 2. posições dos locais;
 * 3. pontos intermediários dos corredores;
 * 4. conexões do grafo de navegação;
 * 5. ligação local -> corredor;
 * 6. categorias utilizadas pela interface.
 *
 * viewBox do SVG: 0 0 1450 850
 */

const CAMPUS_MAP = {

    viewBox: {
        x: 0,
        y: 0,
        width: 1450,
        height: 850
    },

    /*
     * Geometria dos ambientes.
     *
     * O app.js transforma estes objetos em SVG.
     * Assim, nenhuma coordenada dos ambientes precisa ficar no HTML.
     */
    areas: [

        // =========================
        // LABORATÓRIOS
        // =========================

        {
            id: "labEngenharia",
            tipo: "retangulo",
            x: 70, y: 70, largura: 150, altura: 120, raio: 12,
            classe: "area",
            rotulo: "LABORATÓRIO ENGENHARIA",
            centro: [145, 130]
        },

        {
            id: "lab3",
            tipo: "losango",
            centro: [142, 297],
            largura: 95, altura: 95,
            raio: 8,
            classe: "area",
            rotulo: "LAB 3"
        },

        {
            id: "lab2",
            tipo: "losango",
            centro: [232, 352],
            largura: 95, altura: 95,
            raio: 8,
            classe: "area",
            rotulo: "LAB 2"
        },

        {
            id: "lab1",
            tipo: "losango",
            centro: [325, 415],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "LAB 1"
        },

        {
            id: "lab4",
            tipo: "losango",
            centro: [220, 525],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "LAB 4"
        },

        // =========================
        // SALAS 01–08
        // =========================

        {
            id: "sala1",
            tipo: "losango",
            centro: [295, 550],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 1"
        },

        {
            id: "sala2",
            tipo: "losango",
            centro: [380, 605],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 2"
        },

        {
            id: "sala3",
            tipo: "losango",
            centro: [440, 520],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 3"
        },

        {
            id: "sala4",
            tipo: "losango",
            centro: [400, 445],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 4"
        },

        {
            id: "sala5",
            tipo: "losango",
            centro: [455, 380],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 5"
        },

        {
            id: "sala6",
            tipo: "losango",
            centro: [535, 325],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 6"
        },

        {
            id: "sala7",
            tipo: "losango",
            centro: [620, 350],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 7"
        },

        {
            id: "sala8",
            tipo: "losango",
            centro: [665, 415],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 8"
        },

        // =========================
        // PÁTIOS
        // =========================

        {
            id: "patioEsquerdo",
            tipo: "losango",
            centro: [330, 245],
            largura: 150,
            altura: 100,
            raio: 10,
            classe: "area",
            rotulo: "PÁTIO"
        },

        {
            id: "patioCentral",
            tipo: "losango",
            centro: [630, 300],
            largura: 150,
            altura: 100,
            raio: 10,
            classe: "area",
            rotulo: "PÁTIO"
        },

        // =========================
        // ÁREAS CENTRAIS
        // =========================

        {
            id: "salaProfessores",
            tipo: "losango",
            centro: [820, 280],
            largura: 90, altura: 90,
            raio: 8,
            classe: "area",
            rotulo: "SALA DOS PROFESSORES"
        },

        {
            id: "banheiroFeminino",
            tipo: "losango",
            centro: [885, 230],
            largura: 90, altura: 90,
            raio: 8,
            classe: "area",
            rotulo: "BANHEIRO FEMININO"
        },

        {
            id: "banheiroMasculino",
            tipo: "losango",
            centro: [945, 290],
            largura: 90, altura: 90,
            raio: 8,
            classe: "area",
            rotulo: "BANHEIRO MASCULINO"
        },

        {
            id: "cozinha",
            tipo: "losango",
            centro: [922, 352],
            largura: 125, altura: 70,
            raio: 10,
            classe: "area",
            rotulo: "COZINHA"
        },

        {
            id: "salaoNobre",
            tipo: "losango",
            centro: [700, 550],
            largura: 150, altura: 100,
            raio: 10,
            classe: "area",
            rotulo: "SALÃO NOBRE"
        },

        // =========================
        // BLOCO SUPERIOR
        // =========================

        {
            id: "sala11",
            tipo: "retangulo",
            x: 850, y: 70, largura: 135, altura: 85, raio: 8,
            classe: "area regular",
            rotulo: "SALA 11",
            centro: [917, 120]
        },

        {
            id: "biblioteca",
            tipo: "retangulo",
            x: 985, y: 70, largura: 135, altura: 85, raio: 8,
            classe: "area regular",
            rotulo: "BIBLIOTECA",
            centro: [1052, 120]
        },

        {
            id: "banheiros",
            tipo: "retangulo",
            x: 1120, y: 70, largura: 135, altura: 85, raio: 8,
            classe: "area regular",
            rotulo: "BANHEIROS",
            centro: [1187, 120]
        },

        {
            id: "sala25",
            tipo: "retangulo",
            x: 1255, y: 70, largura: 135, altura: 85, raio: 8,
            classe: "area regular",
            rotulo: "SALA 25",
            centro: [1322, 120]
        },

        // =========================
        // SALAS 12–24
        // =========================

        {
            id: "sala18",
            tipo: "losango",
            centro: [1010, 280],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 18"
        },

        {
            id: "sala20",
            tipo: "losango",
            centro: [1080, 335],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 20"
        },

        {
            id: "sala19",
            tipo: "losango",
            centro: [1110, 415],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 19"
        },

        {
            id: "sala17",
            tipo: "losango",
            centro: [1160, 300],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 17"
        },

        {
            id: "sala16",
            tipo: "losango",
            centro: [1210, 370],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 16"
        },

        {
            id: "sala15",
            tipo: "losango",
            centro: [1245, 455],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 15"
        },

        {
            id: "sala14",
            tipo: "losango",
            centro: [1300, 525],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 14"
        },

        {
            id: "sala23",
            tipo: "losango",
            centro: [1370, 450],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 23"
        },

        {
            id: "sala24",
            tipo: "losango",
            centro: [1350, 550],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 24"
        },

        {
            id: "sala12",
            tipo: "losango",
            centro: [1080, 470],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 12"
        },

        {
            id: "sala13",
            tipo: "losango",
            centro: [1140, 520],
            largura: 100, altura: 100,
            raio: 8,
            classe: "area",
            rotulo: "SALA 13"
        },

        // =========================
        // ACESSO AO 2º ANDAR
        // =========================

        {
            id: "rampa2",
            tipo: "retangulo",
            x: 1280, y: 195, largura: 120, altura: 70, raio: 8,
            classe: "area regular",
            rotulo: "RAMPA 2º ANDAR",
            centro: [1340, 230]
        },

        {
            id: "escada2",
            tipo: "retangulo",
            x: 1180, y: 600, largura: 120, altura: 70, raio: 8,
            classe: "area regular",
            rotulo: "ESCADA 2º ANDAR",
            centro: [1240, 635]
        },

        // =========================
        // SALAS 40–44
        // =========================

        {
            id: "sala40",
            tipo: "retangulo",
            x: 1370, y: 250, largura: 45, altura: 65, raio: 5,
            classe: "area regular",
            rotulo: "SALA 40",
            centro: [1392, 288]
        },

        {
            id: "sala41",
            tipo: "retangulo",
            x: 1370, y: 315, largura: 45, altura: 65, raio: 5,
            classe: "area regular",
            rotulo: "SALA 41",
            centro: [1392, 353]
        },

        {
            id: "sala42",
            tipo: "retangulo",
            x: 1370, y: 380, largura: 45, altura: 65, raio: 5,
            classe: "area regular",
            rotulo: "SALA 42",
            centro: [1392, 418]
        },

        {
            id: "sala43",
            tipo: "retangulo",
            x: 1370, y: 445, largura: 45, altura: 65, raio: 5,
            classe: "area regular",
            rotulo: "SALA 43",
            centro: [1392, 483]
        },

        {
            id: "sala44",
            tipo: "retangulo",
            x: 1370, y: 510, largura: 45, altura: 65, raio: 5,
            classe: "area regular",
            rotulo: "SALA 44",
            centro: [1392, 548]
        },

        // =========================
        // SALAS 45–49
        // =========================

        {
            id: "sala49",
            tipo: "retangulo",
            x: 1300, y: 600, largura: 55, altura: 70, raio: 5,
            classe: "area regular",
            rotulo: "SALA 49",
            centro: [1327, 635]
        },

        {
            id: "sala48",
            tipo: "retangulo",
            x: 1355, y: 600, largura: 55, altura: 70, raio: 5,
            classe: "area regular",
            rotulo: "SALA 48",
            centro: [1382, 635]
        },

        {
            id: "sala47",
            tipo: "retangulo",
            x: 1125, y: 670, largura: 55, altura: 70, raio: 5,
            classe: "area regular",
            rotulo: "SALA 47",
            centro: [1152, 710]
        },

        {
            id: "sala46",
            tipo: "retangulo",
            x: 1180, y: 670, largura: 55, altura: 70, raio: 5,
            classe: "area regular",
            rotulo: "SALA 46",
            centro: [1207, 710]
        },

        {
            id: "sala45",
            tipo: "retangulo",
            x: 1235, y: 670, largura: 55, altura: 70, raio: 5,
            classe: "area regular",
            rotulo: "SALA 45",
            centro: [1262, 710]
        },

        // =========================
        // ENTRADA E SERVIÇOS
        // =========================

        {
            id: "portaria",
            tipo: "retangulo",
            x: 500, y: 700, largura: 130, altura: 65, raio: 8,
            classe: "area regular",
            rotulo: "PORTARIA",
            centro: [565, 730]
        },

        {
            id: "entrada",
            tipo: "retangulo",
            x: 630, y: 700, largura: 160, altura: 65, raio: 8,
            classe: "area regular",
            rotulo: "ENTRADA",
            centro: [710, 730]
        },

        {
            id: "atendimento",
            tipo: "retangulo",
            x: 790, y: 700, largura: 150, altura: 65, raio: 8,
            classe: "area regular",
            rotulo: "ATENDIMENTO",
            centro: [865, 730]
        },

        {
            id: "fonte",
            tipo: "elipse",
            centro: [710, 805],
            raioX: 75,
            raioY: 28,
            classe: "area",
            rotulo: "FONTE"
        },

        // =========================
        // ÁREAS VERDES
        // =========================

        {
            id: "areaVerde1",
            tipo: "poligono",
            pontos: [[35,335],[145,230],[255,335],[145,440]],
            classe: "green-area",
            rotulo: "ÁREA VERDE",
            centro: [145, 340]
        },

        {
            id: "areaVerde2",
            tipo: "poligono",
            pontos: [[430,220],[475,175],[520,220],[475,265]],
            classe: "green-area",
            rotulo: "ÁREA VERDE",
            centro: [475, 225]
        },

        {
            id: "areaVerde3",
            tipo: "poligono",
            pontos: [[1010,225],[1060,175],[1110,225],[1060,275]],
            classe: "green-area",
            rotulo: "ÁREA VERDE",
            centro: [1060, 230]
        },

        {
            id: "areaVerde4",
            tipo: "poligono",
            pontos: [[1030,520],[1085,465],[1140,520],[1085,575]],
            classe: "green-area",
            rotulo: "ÁREA VERDE",
            centro: [1085, 525]
        },

        {
            id: "areaVerde5",
            tipo: "poligono",
            pontos: [[1320,330],[1375,275],[1430,330],[1375,385]],
            classe: "green-area",
            rotulo: "ÁREA VERDE",
            centro: [1375, 335]
        }
    ],

    /*
     * Caminhos principais do mapa.
     * Cada caminho é uma sequência de pontos SVG.
     *
     * Estes caminhos representam os corredores da planta.
     */
    caminhos: [
        "M710 730 L710 640 L710 560 L620 500 L530 430 L440 350 L360 270 L300 210",

        "M620 500 L530 560 L440 620 L350 680 L260 680 L190 610",

        "M350 680 L290 570 L235 480 L180 390 L130 310",

        "M440 620 L390 520 L350 430 L310 340 L270 250",

        "M620 500 L720 500 L820 500 L920 500 L1030 500 L1130 500",

        "M920 500 L870 420 L820 350 L770 290",

        "M1030 500 L1080 410 L1140 340 L1200 270",

        "M1130 500 L1200 570 L1280 650 L1350 650",

        "M1200 570 L1260 500 L1320 430 L1380 360",

        "M710 560 L710 470 L710 390 L710 300 L710 220",

        "M710 220 L800 180 L900 140 L1010 140 L1120 140 L1230 140 L1340 140",

        "M710 220 L610 180 L520 140 L430 140",

        "M430 140 L350 190 L270 240",

        "M1340 140 L1380 200 L1380 280 L1380 360 L1380 430 L1380 510 L1380 590 L1380 650"
    ],

    /*
     * Nós do grafo.
     *
     * São pontos de navegação e não ambientes.
     * O usuário não vê estes pontos; eles são usados pelo rotas.js.
     */
    pontos: {

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
    },

    /*
     * Conexões do grafo.
     *
     * O rotas.js poderá usar estas conexões para calcular
     * o menor caminho entre dois locais.
     */
    conexoes: [

        ["entrada", "entradaJ"],
        ["entradaJ", "j1"],
        ["j1", "j2"],
        ["j2", "j3"],
        ["j3", "j4"],
        ["j4", "j5"],
        ["j5", "j6"],
        ["j6", "j7"],

        ["j3", "left1"],
        ["left1", "left2"],
        ["left2", "left3"],

        ["left1", "left4"],
        ["left4", "left5"],
        ["left5", "left6"],
        ["left6", "left7"],

        ["j4", "center1"],
        ["center1", "center2"],
        ["center2", "center3"],
        ["center3", "center4"],
        ["center4", "center5"],

        ["j3", "right1"],
        ["right1", "right2"],
        ["right2", "right3"],
        ["right3", "right4"],
        ["right4", "right5"],

        ["right3", "rA"],
        ["rA", "rB"],
        ["rB", "rC"],

        ["right4", "rD"],
        ["rD", "rE"],
        ["rE", "rF"],

        ["right5", "rG"],
        ["rG", "rH"],
        ["rH", "rI"],

        ["j2", "top0"],
        ["top0", "top1"],
        ["top1", "top2"],
        ["top2", "top3"],
        ["top3", "top4"],
        ["top4", "top5"],
        ["top5", "top6"],

        ["top6", "rightEnd"],
        ["rightEnd", "rightBottom"]
    ],

    /*
     * Locais disponíveis para origem/destino.
     *
     * A coordenada é o ponto visual do ambiente.
     * O campo acesso informa qual nó do corredor deve ser
     * utilizado pelo algoritmo de rota.
     */
    locais: {

        entrada: {
            nome: "Entrada",
            x: 710, y: 730,
            tipo: "origem",
            acesso: "entradaJ"
        },

        portaria: {
            nome: "Portaria",
            x: 565, y: 730,
            acesso: "entrada"
        },

        atendimento: {
            nome: "Atendimento",
            x: 865, y: 730,
            acesso: "entrada"
        },

        fonte: {
            nome: "Fonte",
            x: 710, y: 805,
            acesso: "entradaJ"
        },

        labEngenharia: {
            nome: "Laboratório de Engenharia",
            x: 145, y: 130,
            acesso: "j7"
        },

        lab3: {
            nome: "Lab 3",
            x: 142, y: 297,
            acesso: "left7"
        },

        lab2: {
            nome: "Lab 2",
            x: 232, y: 352,
            acesso: "left6"
        },

        lab1: {
            nome: "Lab 1",
            x: 325, y: 415,
            acesso: "left5"
        },

        lab4: {
            nome: "Lab 4",
            x: 220, y: 525,
            acesso: "left3"
        },

        sala1: {
            nome: "Sala 1",
            x: 295, y: 550,
            acesso: "left3"
        },

        sala2: {
            nome: "Sala 2",
            x: 380, y: 605,
            acesso: "left1"
        },

        sala3: {
            nome: "Sala 3",
            x: 440, y: 520,
            acesso: "center1"
        },

        sala4: {
            nome: "Sala 4",
            x: 400, y: 445,
            acesso: "center2"
        },

        sala5: {
            nome: "Sala 5",
            x: 455, y: 380,
            acesso: "center3"
        },

        sala6: {
            nome: "Sala 6",
            x: 535, y: 325,
            acesso: "center4"
        },

        sala7: {
            nome: "Sala 7",
            x: 620, y: 350,
            acesso: "j6"
        },

        sala8: {
            nome: "Sala 8",
            x: 665, y: 415,
            acesso: "j5"
        },

        patioEsquerdo: {
            nome: "Pátio",
            x: 330, y: 245,
            acesso: "j6"
        },

        patioCentral: {
            nome: "Pátio",
            x: 630, y: 300,
            acesso: "top0"
        },

        salaProfessores: {
            nome: "Sala dos professores",
            x: 820, y: 280,
            acesso: "rC"
        },

        banheiroFeminino: {
            nome: "Banheiro feminino",
            x: 885, y: 230,
            acesso: "rC"
        },

        banheiroMasculino: {
            nome: "Banheiro masculino",
            x: 945, y: 290,
            acesso: "rB"
        },

        cozinha: {
            nome: "Cozinha",
            x: 922, y: 352,
            acesso: "rB"
        },

        salaoNobre: {
            nome: "Salão nobre",
            x: 700, y: 550,
            acesso: "right3"
        },

        sala11: {
            nome: "Sala 11",
            x: 917, y: 120,
            acesso: "top2"
        },

        biblioteca: {
            nome: "Biblioteca",
            x: 1052, y: 120,
            acesso: "top3"
        },

        banheiros: {
            nome: "Banheiros",
            x: 1187, y: 120,
            acesso: "top4"
        },

        sala25: {
            nome: "Sala 25",
            x: 1322, y: 120,
            acesso: "top6"
        },

        sala12: {
            nome: "Sala 12",
            x: 1080, y: 470,
            acesso: "right3"
        },

        sala13: {
            nome: "Sala 13",
            x: 1140, y: 520,
            acesso: "right5"
        },

        sala18: {
            nome: "Sala 18",
            x: 1010, y: 280,
            acesso: "rA"
        },

        sala20: {
            nome: "Sala 20",
            x: 1080, y: 335,
            acesso: "rD"
        },

        sala19: {
            nome: "Sala 19",
            x: 1110, y: 415,
            acesso: "right5"
        },

        sala17: {
            nome: "Sala 17",
            x: 1160, y: 300,
            acesso: "rE"
        },

        sala16: {
            nome: "Sala 16",
            x: 1210, y: 370,
            acesso: "rF"
        },

        sala15: {
            nome: "Sala 15",
            x: 1245, y: 455,
            acesso: "rG"
        },

        sala14: {
            nome: "Sala 14",
            x: 1300, y: 525,
            acesso: "rH"
        },

        sala23: {
            nome: "Sala 23",
            x: 1370, y: 450,
            acesso: "rightEnd"
        },

        sala24: {
            nome: "Sala 24",
            x: 1350, y: 550,
            acesso: "rightBottom"
        },

        rampa2: {
            nome: "Rampa 2º andar",
            x: 1340, y: 230,
            acesso: "top6"
        },

        escada2: {
            nome: "Escada 2º andar",
            x: 1240, y: 635,
            acesso: "rG"
        },

        sala40: {
            nome: "Sala 40",
            x: 1392, y: 288,
            acesso: "rightEnd"
        },

        sala41: {
            nome: "Sala 41",
            x: 1392, y: 353,
            acesso: "rightEnd"
        },

        sala42: {
            nome: "Sala 42",
            x: 1392, y: 418,
            acesso: "rightEnd"
        },

        sala43: {
            nome: "Sala 43",
            x: 1392, y: 483,
            acesso: "rightEnd"
        },

        sala44: {
            nome: "Sala 44",
            x: 1392, y: 548,
            acesso: "rightEnd"
        },

        sala45: {
            nome: "Sala 45",
            x: 1262, y: 710,
            acesso: "rH"
        },

        sala46: {
            nome: "Sala 46",
            x: 1207, y: 710,
            acesso: "rH"
        },

        sala47: {
            nome: "Sala 47",
            x: 1152, y: 710,
            acesso: "rG"
        },

        sala48: {
            nome: "Sala 48",
            x: 1382, y: 635,
            acesso: "rightBottom"
        },

        sala49: {
            nome: "Sala 49",
            x: 1327, y: 635,
            acesso: "rH"
        }
    },

    /*
     * Áreas verdes não entram como destino por padrão.
     * Elas continuam no mapa para representação visual.
     */
    categorias: {
        "Entrada e serviços": [
            "entrada",
            "portaria",
            "atendimento",
            "fonte"
        ],

        "Laboratórios": [
            "labEngenharia",
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
            "salaProfessores",
            "banheiroFeminino",
            "banheiroMasculino",
            "cozinha",
            "salaoNobre"
        ],

        "Salas e serviços": [
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
            "sala23",
            "sala24"
        ],

        "2º andar": [
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
            "sala49"
        ]
    }
};


/*
 * Compatibilidade com o código antigo.
 *
 * Se app.js/rotas.js ainda estiverem usando:
 *   locais
 *   pontos
 *   conexoes
 *
 * eles continuam funcionando enquanto fazemos a migração.
 */
const locais = CAMPUS_MAP.locais;
const pontos = CAMPUS_MAP.pontos;
const conexoes = CAMPUS_MAP.conexoes;
const categorias = CAMPUS_MAP.categorias;


/*
 * Locais exibidos nos selects de origem/destino.
 * Áreas verdes ficam fora da seleção.
 */
const locaisVisiveis = Object.keys(locais);
