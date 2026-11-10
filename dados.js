/* =========================================================
   dados.js - Todos os dados editáveis do site dos Veteranos
   ========================================================= */

// --- CONSTANTES GERAIS ---
const MESES = ["Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
const QUOTA = 20;
const QUOTA_NI = 10;
const SALDO_INICIAL = 2220;
const valorInscricao = 30;
const valorSocio = 50;
const RECEITAS_EXTRAS = 20; // Acerto da merenda

// --- CONFIGURAÇÃO DA ÉPOCA ---
const EPOCA_ATUAL = "2026/27";
const DATA_ULTIMA_ATUALIZACAO = "10 Nov 2026";
const DIA_TREINO = "Quarta 21h";

// --- PROJEÇÃO DE DESPESAS MENSAIS (gráfico do Resumo) ---
const PROJECAO_DESPESAS_MENSAIS = [1620, 270, 420, 200, 550, 380, 270, 440, 270, 200];

// --- MASSAGISTA ---
const MASSA_AGISTA_POR_JOGO = 25;

// --- PLANTEL ---
const inscritos = [
    { nome: "André Pinho", apelido: "PINHO", num: 30, nasc: "13/12/1984" },
    { nome: "Américo Oliveira", apelido: "AMÉRICO", num: 13, nasc: "10/08/1982" },
    { nome: "Mário Oliveira", apelido: "MÁRIO", num: 18, nasc: "11/11/1970" },
    { nome: "Rui Rocha", apelido: "ROCHA", num: 77, nasc: "12/11/1988" },
    { nome: "António Rocha", apelido: "ROCHINHA", num: 11, nasc: "08/04/1965" },
    { nome: "Pedro Cadete", apelido: "CADETE", num: 17, nasc: "10/07/1973" },
    { nome: "António Oliveira", apelido: "OLIVEIRA", num: 8, nasc: "10/11/1988" },
    { nome: "Amílcar André", apelido: "AMILCAR", num: 10, nasc: "26/01/1987" },
    { nome: "Pedro Costa", apelido: "MOCHO", num: 9, nasc: "13/07/1986" },
    { nome: "Sérgio Freitas", apelido: "FREITAS", num: 79, nasc: "31/10/1986" },
    { nome: "Pedro Ferreira", apelido: "PEDRO F.", num: 71, nasc: "11/02/1979" },
    { nome: "Jorge Azevedo", apelido: "JORGE", num: 23, nasc: "28/09/1989" },
    { nome: "Américo Silva", apelido: "AMÉRICO SILVA", num: 88, nasc: "12/10/1979" },
    { nome: "Tiago Mota", apelido: "MOTINHA", num: 98, nasc: "28/02/1990" },
    { nome: "José Eduardo", apelido: "ZÉ EDUARDO", num: 5, nasc: "01/09/1985" },
    { nome: "Sergio Rodrigues", apelido: "RODRIGUES", num: 25, nasc: "01/11/1983" },
    { nome: "Joel Tavares", apelido: "JOEL", num: 3, nasc: "27/09/1981" },
    { nome: "Fábio Gonçalves", apelido: "FÁBIO", num: null, nasc: "13/07/1990" },
    { nome: "Daniel Dias", apelido: "DANIEL", num: null, nasc: "10/03/1982" },
    { nome: "Hugo André", apelido: "H. ANDRÉ", num: 6, nasc: "10/05/1986" }
];

const naoInscritos = [
    { nome: "Inácio", apelido: "INÁCIO", num: 3, nasc: "26/10/1976" },
    { nome: "Telmo", apelido: "TELMO", num: null, nasc: "23/03/1991" },
    { nome: "Fábio Oliveira", apelido: "FÁBIO", num: null, nasc: "21/10/2000" },
    { nome: "Romeu", apelido: "ROMEU", num: 2, nasc: "11/05/1976" },
    { nome: "Marcelo", apelido: "MARCELO", num: null, nasc: "18/12/1992" },
    { nome: "Celso Ferreira", apelido: "CELSO", num: null, nasc: null },
    { nome: "António José Silva", apelido: "TOZE", num: 70, nasc: "16/03/1981" },
    { nome: "Salvador", apelido: "SALVADOR", num: null, nasc: "13/07/1978" },
    { nome: "Vitor Leite", apelido: "VITINHA GR", num: null, nasc: "01/06/1992" },
    { nome: "Zé Buraca", apelido: "ZÉ BURACA", num: null, nasc: "04/08/1980" },
    { nome: "Armando", apelido: "ARMANDO", num: 7, nasc: "19/03/1973" },
    { nome: "Luís Paiva", apelido: "LUÍS", num: 26, nasc: "21/11/1982" },
    { nome: "Sérgio Tavares", apelido: "TAVARES", num: 27, nasc: "10/10/1984" },
    { nome: "Mendes", apelido: "MENDES", num: 21, nasc: "28/05/1986" },
    { nome: "Miguel Almeida", apelido: "MIGUEL", num: 19, nasc: "10/05/1974" },
    { nome: "Sergio Silva", apelido: "SERGINHO", num: 4, nasc: "01/01/1988" }
];

// --- MUDANÇAS DE ESTATUTO (inscrito ↔ não inscrito) ---
const MUDANCAS_ESTATUTO = {};

// --- SÓCIOS QUE AINDA DEVEM 10€ AO CLUBE ---
const SOCIOS_A_DEVER_10 = [
    "Américo Oliveira", "António Oliveira", 
    "Daniel Dias", "Sergio Rodrigues", "Inácio"
];

// --- PAGAMENTOS DE QUOTAS (índices = posição em MESES) ---
const pagamentos = {
    "Pedro Costa": [0, 1, 2],
    "Telmo": [0, 1, 2],
    "Mário Oliveira": [0, 1, 2, 3],
    "Américo Silva": [0, 1, 2, 3],
    "Sergio Rodrigues": [0],
    "Américo Oliveira": [0, 1, 2],
    "Joel Tavares": [0, 1, 2],
    "Marcelo": [0, 1, 2],
    "Pedro Cadete": [0, 1],
    "António Oliveira": [0],
    "André Pinho": [0, 1, 2, 3],
    "Rui Rocha": [0, 1, 2, 3, 4, 5],
    "António Rocha": [0, 1, 2, 3, 4, 5],
    "Jorge Azevedo": [0, 1, 2],
    "Pedro Ferreira": [0, 1, 2],
    "Sérgio Freitas": [0, 1],
    "José Eduardo": [0, 1, 2, 3],
    "António José Silva": [0, 1, 2, 3, 4],
    "Hugo André": [0],
    "Daniel Dias": [0],
    "Luís Paiva": [0],
    "Inácio": [0],
    "Tiago Mota": [0],
    "Amílcar André": [0, 1, 2],
    "Fábio Gonçalves": [0],
    "Zé Buraca": [0, 1]
};

// --- INSCRIÇÕES PAGAS ---
const inscricoesPagas = [
    "Mário Oliveira", "Américo Silva", "Sergio Rodrigues", "Américo Oliveira",
    "Joel Tavares", "António Oliveira", "André Pinho",
    "Rui Rocha", "António Rocha",
    "Pedro Ferreira",
    "Pedro Costa", "Jorge Azevedo", "Pedro Cadete",
    "Amílcar André",
    "Sérgio Freitas",
    "José Eduardo",
    "Daniel Dias",
    "Tiago Mota",
    "Hugo André"
];

// --- SÓCIOS PAGOS ---
const sociosPagos = [
    "Pedro Cadete", "André Pinho", "José Eduardo", "Jorge Azevedo",
    "Joel Tavares", "Amílcar André", "Hugo André", "Pedro Ferreira",
    "Mário Oliveira", "Américo Oliveira", "António Oliveira", "Américo Silva",
    "Sérgio Freitas", "António José Silva", "Rui Rocha", "António Rocha",
    "Daniel Dias", "Luís Paiva", "Sergio Rodrigues", "Inácio", "Tiago Mota",
    "Pedro Costa"
];

// --- SÓCIOS QUE PAGARAM DIRETAMENTE AO CLUBE PRINCIPAL ---
const sociosPagoAoClube = [
    "André Pinho", "Jorge Azevedo", "Hugo André", "Amílcar André",
    "José Eduardo", "Joel Tavares", "Luís Paiva", "Tiago Mota", "Rui Rocha",
    "Sérgio Freitas", "Pedro Cadete", "António Rocha"
];

// --- MERENDAS / FARNEL PAGOS ---
const merendaPaga = [
    "Zé Buraca", "Américo Oliveira", "José Eduardo", "Joel Tavares", "Jorge Azevedo",
    "Américo Silva"
];

// --- DESPESAS CONFIRMADAS ---
const despesaCampo = 1000;
const AFA_EXTRA_FABIO = 30;
const despesaAFA = 950; 
const despesaAgua = 4;
const despesaGalhardetes = 200;

// --- ESTADO DAS DESPESAS ---
const DESPESAS_PAGAS = {
    campo: false,
    afa: true,
    galhardetes: true,
    agua: true
};

// --- DESPESAS EXTRA (variáveis, ao longo da época) ---
const despesasExtras = [
    {
        data: "7 Nov 2026",
        desc: "Merenda - jogo vs Guisande FC",
        itens: "Cuetara sortido 420g — €5,30 · Fruta (3 un) — €3,90 · Água Duvale 6L — €1,00 · Chá preto (10 saq) — €1,30",
        valor: 11.50,
        pago: true
    },
    {
        data: "3 Nov 2026",
        desc: "Massagista - jogo vs ADC Sanguedo",
        itens: "Serviço de massagista",
        valor: 25,
        pago: true
    },
    {
        data: "31 Out 2026",
        desc: "Merenda - jogo vs ADC Sanguedo",
        itens: "Cuetara Maria Oro 800g — €2,75 · Cuetara sortido 420g — €5,30 · Copos 200ml (50 un) — €2,30 · Água Duvale 6L — €1,00 · Fruta (2 un) — €2,60",
        valor: 13.95,
        pago: true
    },
    {
        data: "28 Out 2026",
        desc: "Tábua de finos - treino",
        itens: "Tábua de finos",
        valor: 10,
        pago: true
    },
    {
        data: "23 Out 2026",
        desc: "Merenda - jogo vs GD Fajões",
        itens: "Fruta (2,65 kg) — €3,45 · Cuetara sortido 420g — €5,30 · Água Duvale 6L — €1,00 · Água Nascente 6L — €1,05",
        valor: 10.80,
        pago: true
    },
    {
        data: "17 Out 2026",
        desc: "Merenda e águas - jogo vs CD Loureiro",
        itens: "Merenda jogadores: Fruta (2,35kg) — €3,71 · 2x Água Nascente 6L — €2,10 · 2x Cuetara 420g — €10,60 · 50 Copos 200ml — €2,30 · Bolachas Maria Dourada — €2,10 | Árbitros: 3x Panike Misto — €3,60 · 3x Água Nascente 0,5L — €0,60 · Depósito garrafas — €0,30",
        valor: 25.31,
        pago: true
    },
    {
        data: "10 Out 2026",
        desc: "Merenda - jogo vs Bustelo (partilhada com Veteranos do Bustelo)",
        itens: "Cuetara surtido 420g — €5,85 · fruta 2,60 kg — €2,86 · fruta 5,20 kg — €6,76 · água Serra da Penha 5L — €0,95 · chocolates 3 unid. — €13,50 · água São Martinho 0,5L 24 unid. — €4,80 · depósito/volta garrafas 24 unid. — €2,40",
        valor: 37.12,
        pago: true
    },
    {
        data: "3 Out 2026",
        desc: "Regueifas - jogo de treino vs Sandim",
        itens: "Regueifas",
        valor: 42,
        pago: true
    },
    {
        data: "3 Out 2026",
        desc: "Merenda do intervalo - jogo de treino vs Sandim",
        itens: "2x Lipton c/ limão (20 saq) — €5,90 · Cuetara surtido 420g — €5,85 · 2x água Duvale 6L — €2,00 · fruta (2,50 kg) — €3,25",
        valor: 17,
        pago: true
    },
    {
        data: "26 Set 2026",
        desc: "Merenda - jogo amigável vs Paços de Ferreira",
        itens: "Fruta, 2x água 5L, bolachas Maria, chá, 50 copos 200ml",
        valor: 15.19,
        pago: true
    }
];

// --- LISTA DE PREÇOS E VENDAS ---
const listaPrecos = {
    "Equipamento treino": 20,
    "T-shirt": 10,
    "Polo": 17,
    "Fato treino": 45,
    "Kispo": 45,
    "Cachecol": 10,
    "Meias": 5,
    "Calções saída": 15,
    "Camisola equipamento": 15,
    "Boné": 5
};

const compras6Set = [
    { nome: "Telmo", itens: ["Calções saída", "Boné"], pago: true },
    { nome: "Mário Oliveira", itens: ["Boné"], pago: true },
    { nome: "Vitor Leite", itens: ["Calções saída", "Polo"], pago: true },
    { nome: "Marcelo", itens: ["Calções saída", "Polo", "Boné", "T-shirt"], pago: true },
    { nome: "Zé Buraca", itens: ["Calções saída", "T-shirt", "Boné"], pago: true }
];

// --- TREINOS E JOGOS (presenças) ---
const treinosJogos = [
    { data: "7 Nov 2026", tipo: "jogo", titulo: "Jogo vs Guisande FC (Liga Masters, J4)", estado: "registado",
      presentes: ["Fábio Gonçalves", "Américo Oliveira", "Joel Tavares", "Pedro Ferreira", "Sérgio Freitas", "Jorge Azevedo", "Rui Rocha", "José Eduardo", "Amílcar André", "Pedro Costa", "António Oliveira", "Américo Silva", "André Pinho", "António Rocha", "Mário Oliveira", "Pedro Cadete"],
      extra: [] },
    { data: "3 Nov 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Sérgio Freitas", "Amílcar André"],
      extra: ["Marcelo"] },
    { data: "31 Out 2026", tipo: "jogo", titulo: "Jogo vs ADC Sanguedo (Liga Masters, J3)", estado: "registado",
      presentes: ["Fábio Gonçalves", "Mário Oliveira", "Joel Tavares", "Américo Oliveira", "Pedro Ferreira", "Jorge Azevedo", "Rui Rocha", "André Pinho", "António Oliveira", "Sérgio Freitas", "Sergio Rodrigues", "José Eduardo", "Amílcar André", "Pedro Cadete", "Daniel Dias", "António Rocha"],
      extra: [] },
    { data: "28 Out 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Sergio Rodrigues", "Daniel Dias", "André Pinho", "José Eduardo", "Sérgio Freitas"],
      extra: ["Marcelo", "Zé Buraca", "Telmo", "António José Silva"] },
    { data: "24 Out 2026", tipo: "jogo", titulo: "Jogo vs GD Fajões (Liga Masters, J2)", estado: "registado",
      presentes: ["Fábio Gonçalves", "António Rocha", "Américo Oliveira", "Pedro Ferreira", "Rui Rocha", "José Eduardo", "André Pinho", "Amílcar André", "Sergio Rodrigues", "Pedro Costa", "Joel Tavares", "Sérgio Freitas", "Daniel Dias", "Pedro Cadete", "Mário Oliveira"],
      extra: [] },
    { data: "21 Out 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Amílcar André", "António Oliveira", "Rui Rocha", "Américo Oliveira", "Pedro Cadete", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Sergio Rodrigues", "André Pinho"],
      extra: ["Marcelo"] },
    { data: "17 Out 2026", tipo: "jogo", titulo: "Jogo vs CD Loureiro (Liga Masters, J1)", estado: "registado",
      presentes: ["Fábio Gonçalves", "Mário Oliveira", "Joel Tavares", "Américo Oliveira", "Pedro Ferreira", "Jorge Azevedo", "André Pinho", "Rui Rocha", "Amílcar André", "António Oliveira", "Pedro Costa", "Sérgio Freitas", "António Rocha", "José Eduardo", "Américo Silva", "Sergio Rodrigues"],
      extra: [] },
    { data: "14 Out 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Amílcar André", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Hugo André", "Sergio Rodrigues", "Daniel Dias", "André Pinho"],
      extra: ["Luís Paiva", "António José Silva", "Marcelo", "Zé Buraca"] },
    { data: "10 Out 2026", tipo: "jogo", titulo: "Jogo de treino vs Bustelo", estado: "registado",
      presentes: ["Fábio Gonçalves", "António Rocha", "Pedro Ferreira", "Américo Oliveira", "Joel Tavares", "Jorge Azevedo", "António Oliveira", "Sergio Rodrigues", "Amílcar André", "Pedro Costa", "Rui Rocha", "Mário Oliveira", "Sérgio Freitas", "Hugo André", "André Pinho", "José Eduardo", "Américo Silva"],
      extra: ["Marcelo", "Zé Buraca"] },
    { data: "7 Out 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Amílcar André", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Sergio Rodrigues", "Hugo André"],
      extra: ["Marcelo", "Zé Buraca", "Telmo", "Inácio", "Luís Paiva", "António José Silva"] },
    { data: "2 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Joel Tavares", "Hugo André", "Pedro Costa", "António Rocha", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Sergio Rodrigues", "Luís Paiva", "Pedro Ferreira", "Américo Silva", "Tiago Mota", "Amílcar André", "Rui Rocha", "Sérgio Freitas", "André Pinho"],
      extra: ["Telmo", "Marcelo", "Daniel Dias", "Zé Buraca"] },
    { data: "9 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Joel Tavares", "Hugo André", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Sergio Rodrigues", "Pedro Ferreira", "Américo Silva", "Tiago Mota", "José Eduardo"],
      extra: ["Marcelo", "Zé Buraca", "Inácio"] },
    { data: "12 Set 2026", tipo: "jogo", titulo: "Jogo de treino vs Paços de Ferreira", estado: "registado",
      presentes: ["Fábio Gonçalves", "Américo Oliveira", "Joel Tavares", "Pedro Ferreira", "Sérgio Freitas", "Hugo André", "André Pinho", "Jorge Azevedo", "Sergio Rodrigues", "José Eduardo", "Pedro Costa", "Mário Oliveira", "Amílcar André", "Pedro Cadete", "Daniel Dias", "António Rocha", "Rui Rocha", "Américo Silva"],
      extra: ["Zé Buraca", "Marcelo"] },
    { data: "16 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Joel Tavares", "Amílcar André", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "André Pinho", "Fábio Gonçalves"],
      extra: ["Marcelo", "Zé Buraca", "Telmo"] },
    { data: "23 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Amílcar André", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "André Pinho", "Sérgio Freitas", "Tiago Mota"],
      extra: ["Marcelo", "Zé Buraca", "Telmo"] },
    { data: "26 Set 2026", tipo: "jogo", titulo: "Jogo amigável vs Paços de Ferreira", estado: "registado",
      presentes: ["Fábio Gonçalves", "Pedro Ferreira", "Mário Oliveira", "Américo Oliveira", "Joel Tavares", "André Pinho", "Sérgio Freitas", "Rui Rocha", "Pedro Cadete", "Amílcar André", "Jorge Azevedo", "Américo Silva", "José Eduardo", "Daniel Dias", "Sergio Rodrigues"],
      extra: ["Marcelo", "Zé Buraca"] },
    { data: "30 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Amílcar André", "António Oliveira", "Rui Rocha", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Azevedo", "Pedro Ferreira", "Américo Silva", "Joel Tavares", "António Rocha", "Luís Paiva", "Daniel Dias", "José Eduardo", "Hugo André"],
      extra: ["Marcelo", "Zé Buraca", "Telmo"] },
    { data: "3 Out 2026", tipo: "jogo", titulo: "Jogo de treino vs Sandim", estado: "registado",
      presentes: ["Fábio Gonçalves", "Américo Oliveira", "Mário Oliveira", "Pedro Ferreira", "Rui Rocha", "Jorge Azevedo", "Amílcar André", "Pedro Costa", "Joel Tavares", "Américo Silva", "Hugo André"],
      extra: ["Marcelo", "Telmo", "Luís Paiva"] }
];

// --- CALENDÁRIO DA LIGA MASTERS (1.ª fase) ---
const calendario = [
    { jornada: 1,  data: "17 Out 2026", casa: true,  adversario: "CD Loureiro",              hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "derrota", golosNos: 2, golosEles: 4, marcadores: ["Pedro Costa", "José Eduardo"] },
    { jornada: 2,  data: "24 Out 2026", casa: false, adversario: "GD Fajões",                hora: "16:00", local: "Campo das Cruzes (Fajões)",   estado: "derrota", golosNos: 0, golosEles: 3, marcadores: [] },
    { jornada: 3,  data: "31 Out 2026", casa: true,  adversario: "ADC Sanguedo",             hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "vitoria", golosNos: 3, golosEles: 2, marcadores: ["Jorge Azevedo", "José Eduardo", "Sergio Rodrigues"] },
    { jornada: 4,  data: "7 Nov 2026",  casa: false, adversario: "Guisande FC",              hora: "15:30", local: "Estádio Oliveira Santos",     estado: "derrota", golosNos: 1, golosEles: 3, marcadores: ["José Eduardo"] },
    { jornada: 5,  data: "14 Nov 2026", folga: true },
    { jornada: 6,  data: "21 Nov 2026", casa: true,  adversario: "Romariz FC",               hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 7,  data: "28 Nov 2026", casa: false, adversario: "UD Oliveirense",           hora: "15:30", local: "Oliveira de Azeméis",         estado: "agendado" },
    { jornada: 8,  data: "5 Dez 2026",  casa: true,  adversario: "UD Fermedo",               hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 9,  data: "12 Dez 2026", casa: false, adversario: "CD Feirense",              hora: "15:30", local: "Sanfins",                     estado: "agendado" },
    { jornada: 10, data: "19 Dez 2026", casa: true,  adversario: "Sc S. João Ver",           hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 11, data: "9 Jan 2027",  casa: false, adversario: "ARC S. Vicente Pereira",   hora: "17:30", local: "S. Vicente Pereira",          estado: "agendado" },
    { jornada: 12, data: "16 Jan 2027", casa: true,  adversario: "Fiães SC",                 hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 13, data: "23 Jan 2027", casa: false, adversario: "AD Sanjoanense",           hora: "15:30", local: "S. João Madeira",             estado: "agendado" },
    { jornada: 14, data: "30 Jan 2027", casa: true,  adversario: "Juv. Desp. Carregosense",  hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 15, data: "6 Fev 2027",  casa: false, adversario: "Lusitânia Lourosa FC",     hora: "15:30", local: "Lourosa",                     estado: "agendado" },
    { jornada: 16, data: "13 Fev 2027", casa: true,  adversario: "A.C. Cucujães",            hora: "15:30", local: "Campo S. Tiago de Lobão",     estado: "agendado" },
    { jornada: 17, data: "20 Fev 2027", casa: false, adversario: "AF União Lamas Veteranos", hora: "15:30", local: "Santa Maria de Lamas",        estado: "agendado" }
];

// --- EQUIPAS DO GRUPO (1.ª fase — Liga Masters) ---
const equipasGrupo = [
    "ARC S. Vicente Pereira", "Fiães SC", "Sc S. João Ver", "AD Sanjoanense",
    "CD Feirense", "Juv. Desp. Carregosense", "UD Fermedo", "Lusitânia Lourosa FC",
    "UD Oliveirense", "A.C. Cucujães", "Romariz FC", "AF União Lamas Veteranos",
    "ADC Lobão", "CD Loureiro", "Guisande FC", "GD Fajões", "ADC Sanguedo"
];

// --- RESULTADOS DA LIGA MASTERS ---
const resultadosLiga = [
    // Jornada 1
    { jornada: 1, casa: "UD Fermedo", fora: "Lusitânia Lourosa FC", golosCasa: 1, golosFora: 6 },
    { jornada: 1, casa: "AF União Lamas Veteranos", fora: "Fiães SC", golosCasa: 1, golosFora: 1 },
    { jornada: 1, casa: "Guisande FC", fora: "GD Fajões", golosCasa: 1, golosFora: 0 },
    { jornada: 1, casa: "Sc S. João Ver", fora: "AD Sanjoanense", golosCasa: 4, golosFora: 0 },
    { jornada: 1, casa: "CD Feirense", fora: "Juv. Desp. Carregosense", golosCasa: 2, golosFora: 3 },
    { jornada: 1, casa: "ADC Lobão", fora: "CD Loureiro", golosCasa: 2, golosFora: 4 },
    { jornada: 1, casa: "UD Oliveirense", fora: "A.C. Cucujães", golosCasa: 2, golosFora: 3 },
    { jornada: 1, casa: "Romariz FC", fora: "ARC S. Vicente Pereira", golosCasa: 5, golosFora: 0 },
    // Jornada 2
    { jornada: 2, casa: "GD Fajões", fora: "ADC Lobão", golosCasa: 3, golosFora: 0 },
    { jornada: 2, casa: "Lusitânia Lourosa FC", fora: "CD Feirense", golosCasa: 2, golosFora: 0 },
    { jornada: 2, casa: "CD Loureiro", fora: "Romariz FC", golosCasa: 1, golosFora: 1 },
    { jornada: 2, casa: "Juv. Desp. Carregosense", fora: "Sc S. João Ver", golosCasa: 1, golosFora: 3 },
    { jornada: 2, casa: "ADC Sanguedo", fora: "Guisande FC", golosCasa: 0, golosFora: 1 },
    { jornada: 2, casa: "ARC S. Vicente Pereira", fora: "UD Oliveirense", golosCasa: 0, golosFora: 5 },
    { jornada: 2, casa: "A.C. Cucujães", fora: "UD Fermedo", golosCasa: 4, golosFora: 1 },
    { jornada: 2, casa: "AD Sanjoanense", fora: "AF União Lamas Veteranos", golosCasa: 2, golosFora: 0 },
    // Jornada 3
    { jornada: 3, casa: "Fiães SC", fora: "AD Sanjoanense", golosCasa: 0, golosFora: 2 },
    { jornada: 3, casa: "UD Oliveirense", fora: "CD Loureiro", golosCasa: 1, golosFora: 0 },
    { jornada: 3, casa: "Sc S. João Ver", fora: "Lusitânia Lourosa FC", golosCasa: 1, golosFora: 0 },
    { jornada: 3, casa: "CD Feirense", fora: "A.C. Cucujães", golosCasa: 0, golosFora: 2 },
    { jornada: 3, casa: "ADC Lobão", fora: "ADC Sanguedo", golosCasa: 3, golosFora: 2 },
    { jornada: 3, casa: "UD Fermedo", fora: "ARC S. Vicente Pereira", golosCasa: 2, golosFora: 1 },
    { jornada: 3, casa: "Romariz FC", fora: "GD Fajões", golosCasa: 3, golosFora: 5 },
    { jornada: 3, casa: "AF União Lamas Veteranos", fora: "Juv. Desp. Carregosense", golosCasa: 1, golosFora: 5 },
    // Jornada 4
    { jornada: 4, casa: "Guisande FC", fora: "ADC Lobão", golosCasa: 3, golosFora: 1 }
];

// --- COMPETIÇÃO ---
const torneios = [
    {
        nome: "Torneio de Nelas",
        data: "5-6 Set 2026",
        local: "Nelas",
        jogos: [
            { data: "5 Set 2026", adversario: "C.D. Agualva", golosNos: 2, golosEles: 2, marcadores: ["Mário", "Auto Golo"] },
            { data: "5 Set 2026", adversario: "A.C.D.S. Vinha da Rainha", golosNos: 3, golosEles: 1, marcadores: ["Telmo", "Rui Rocha", "Américo Oliveira"] },
            { data: "6 Set 2026", adversario: "E.F. Central 32", golosNos: 1, golosEles: 1, marcadores: ["Pedro Costa"] }
        ]
    }
];

const amigaveis = [
    {
        data: "10 Out 2026",
        adversario: "Bustelo",
        casa: true,
        golosNos: 3,
        golosEles: 2,
        marcadores: ["Zé Buraca", "Pedro Costa", "André Pinho"]
    },
    {
        data: "3 Out 2026",
        adversario: "Sandim",
        casa: true,
        golosNos: 3,
        golosEles: 4,
        marcadores: ["Jorge Azevedo", "Jorge Azevedo", "Américo Oliveira"]
    },
    {
        data: "26 Set 2026",
        adversario: "Paços de Ferreira",
        casa: false,
        golosNos: 2,
        golosEles: 4,
        marcadores: ["José Eduardo", "Marcelo"]
    },
    {
        data: "12 Set 2026",
        adversario: "Paços de Ferreira",
        casa: false,
        golosNos: 2,
        golosEles: 3,
        marcadores: ["Pedro Costa", "José Eduardo"],
        arbitro: {
            valorPorJogador: 5,
            custoPago: true,
            participantes: [
                "Fábio Gonçalves", "Américo Oliveira", "Joel Tavares", "Pedro Ferreira",
                "Sérgio Freitas", "Hugo André", "André Pinho", "Jorge Azevedo",
                "Sergio Rodrigues", "José Eduardo", "Pedro Costa", "Mário Oliveira",
                "Amílcar André", "Pedro Cadete", "Daniel Dias", "António Rocha",
                "Rui Rocha", "Américo Silva", "Zé Buraca", "Marcelo"
            ],
            pagaram: [
                "André Pinho", "Pedro Cadete", "Jorge Azevedo", "Rui Rocha",
                "António Rocha", "Mário Oliveira", "Sérgio Freitas", "Américo Silva",
                "Pedro Ferreira", "Joel Tavares", "Zé Buraca", "Amílcar André",
                "José Eduardo", "Hugo André", "Daniel Dias", "Américo Oliveira",
                "Fábio Gonçalves", "Pedro Costa", "Marcelo", "Sergio Rodrigues"
            ]
        }
    }
];

// --- ATAS ---
const atas = [
    {
        data: "17 Out 2026", titulo: "Atualização da quota de sócio para €50",
        tags: [["decisao", "Decisão"], ["urgente", "Urgente"]], destaque: true,
        pontos: [
            "A direção do clube aumentou a quota de sócio para 50 EUR.",
            "Foram previamente cobrados 40 EUR a todos os sócios.",
            "Está a ser cobrada a diferença de 10 EUR a cada um.",
            "Mário Oliveira e Pedro Cadete já liquidaram a diferença."
        ],
        presentes: "Direção dos Veteranos A.D.C. Lobão"
    },
    {
        data: "2 Out 2026", titulo: "Caso especial — Fábio Gonçalves (época 2026/27)",
        tags: [["decisao", "Decisão"], ["urgente", "Urgente"]], destaque: false,
        pontos: [
            "Fábio Gonçalves — caso especial aprovado pela direção.",