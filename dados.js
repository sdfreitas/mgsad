/* =========================================================
   dados.js — Todos os dados editáveis do site dos Veteranos
   Basta editar este ficheiro para atualizar o site inteiro.
   ========================================================= */

// ─── CONSTANTES GERAIS ───
const MESES = ["Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
const QUOTA = 20;
const QUOTA_NI = 10;
const SALDO_INICIAL = 2220;
const valorInscricao = 30;
const valorSocio = 40;

// ─── PLANTEL ───
const inscritos = [
    { nome: "André Pinho", apelido: "PINHO", num: 30, nasc: "13/12/1984" },
    { nome: "Sérgio Tavares", apelido: "TAVARES", num: 27, nasc: "10/10/1984" },
    { nome: "Américo Oliveira", apelido: "AMÉRICO", num: 13, nasc: "10/08/1982" },
    { nome: "Armando", apelido: "ARMANDO", num: 7, nasc: "19/03/1973" },
    { nome: "Hugo André", apelido: "H. ANDRÉ", num: 6, nasc: "10/05/1986" },
    { nome: "Mário Oliveira", apelido: "MÁRIO", num: 18, nasc: "11/11/1970" },
    { nome: "Mendes", apelido: "MENDES", num: 21, nasc: "28/05/1986" },
    { nome: "Rui Rocha", apelido: "RUI ROCHA", num: 77, nasc: "12/11/1988" },
    { nome: "António Rocha", apelido: "ROCHINHA", num: 11, nasc: "08/04/1965" },
    { nome: "Pedro Cadete", apelido: "CADETE", num: 17, nasc: "10/07/1973" },
    { nome: "António Oliveira", apelido: "OLIVEIRA", num: 8, nasc: "10/11/1988" },
    { nome: "Amílcar André", apelido: "AMILCAR", num: 10, nasc: "26/01/1987" },
    { nome: "Pedro Costa", apelido: "MOCHO", num: 9, nasc: "13/07/1986" },
    { nome: "Sérgio Freitas", apelido: "FREITAS", num: 79, nasc: "31/10/1986" },
    { nome: "Pedro Ferreira", apelido: "PEDRO F.", num: 71, nasc: "11/02/1979" },
    { nome: "Jorge Santos", apelido: "JORGE", num: 23, nasc: "28/09/1989" },
    { nome: "Américo Silva", apelido: "AMÉRICO SILVA", num: 88, nasc: "12/10/1979" },
    { nome: "Tiago Mota", apelido: "MOTINHA", num: 98, nasc: "28/02/1990" },
    { nome: "José Eduardo", apelido: "ZÉ EDUARDO", num: 5, nasc: "01/09/1985" },
    { nome: "Sergio Rodrigues", apelido: "RODRIGUES", num: 25, nasc: "01/11/1983" },
    { nome: "Joel Tavares", apelido: "JOEL", num: 3, nasc: "27/09/1981" },
    { nome: "Fábio Gonçalves", apelido: "FÁBIO", num: null, nasc: "13/07/1990" },
    { nome: "André Lopes", apelido: "ANDRÉ", num: 20, nasc: "15/08/1990" },
    { nome: "Miguel Almeida", apelido: "MIGUEL", num: 19, nasc: "10/05/1974" },
    { nome: "Sergio Silva", apelido: "SERGINHO", num: 4, nasc: "01/01/1988" },
    { nome: "Luís Paiva", apelido: "LUÍS", num: 26, nasc: "21/11/1982" },
    { nome: "Daniel Dias", apelido: "DANIEL", num: null, nasc: "10/03/1982" },
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
];

// ─── PAGAMENTOS DE QUOTAS (índices = posição em MESES) ───
const pagamentos = {
    "Pedro Costa": [0],
    "Telmo": [0, 1],
    "Mário Oliveira": [0],
    "Américo Silva": [0],
    "Sergio Rodrigues": [0],
    "Américo Oliveira": [0],
    "Joel Tavares": [0],
    "Marcelo": [0],
    "Pedro Cadete": [0],
    "António Oliveira": [0]
};

// ─── INSCRIÇÕES PAGAS ───
const inscricoesPagas = ["Mário Oliveira", "Américo Silva", "Sergio Rodrigues", "Américo Oliveira", "Joel Tavares", "António Oliveira"];

// ─── SÓCIOS PAGOS ───
const sociosPagos = [
    "Pedro Cadete",
    "André Pinho",
    "José Eduardo",
    "Jorge Santos",
    "Joel Tavares",
    "Amílcar André",
    "Hugo André"
];

// ─── MERENDAS PAGAS ───
const merendaPaga = ["Zé Buraca", "Américo Oliveira", "José Eduardo"];

// ─── DESPESAS CONFIRMADAS ───
const despesaCampo = 1000;
const despesaAFA = 540;
const despesaAgua = 4;
const despesaGalhardetes = 200;

// ─── LISTA DE PREÇOS E VENDAS ───
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
    { nome: "Telmo", itens: ["Calções saída", "Boné"], pago: false },
    { nome: "Mário Oliveira", itens: ["Boné"], pago: false },
    { nome: "Vitor Leite", itens: ["Calções saída", "Polo"], pago: false },
    { nome: "Marcelo", itens: ["Calções saída", "Polo", "Boné", "T-shirt"], pago: true },
    { nome: "Zé Buraca", itens: ["Calções saída", "T-shirt", "Boné"], pago: true }
];

// ─── TREINOS E JOGOS (presenças) ───
const treinosJogos = [
    { data: "2 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Fábio Gonçalves", "Joel Tavares", "Hugo André", "Pedro Costa", "António Rocha", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Santos", "Sergio Rodrigues", "Luís Paiva", "Pedro Ferreira", "Américo Silva", "Tiago Mota", "Amílcar André", "Rui Rocha", "Sérgio Freitas", "André Pinho"],
      extra: ["Telmo", "Marcelo", "Daniel Dias", "Zé Buraca"] },
    { data: "9 Set 2026", tipo: "treino", titulo: "Treino", estado: "registado",
      presentes: ["Joel Tavares", "Hugo André", "Pedro Costa", "Américo Oliveira", "Pedro Cadete", "Mário Oliveira", "Jorge Santos", "Sergio Rodrigues", "Pedro Ferreira", "Américo Silva", "Tiago Mota", "José Eduardo"],
      extra: ["Marcelo", "Zé Buraca", "Inácio"] },
    { data: "12 Set 2026", tipo: "jogo", titulo: "Jogo de treino vs Paços de Ferreira", estado: "registado",
      presentes: ["Fábio Gonçalves", "Américo Oliveira", "Joel Tavares", "Pedro Ferreira", "Sérgio Freitas", "Hugo André", "André Pinho", "Jorge Santos", "Sergio Rodrigues", "José Eduardo", "Pedro Costa", "Mário Oliveira", "Amílcar André", "Pedro Cadete", "Daniel Dias", "António Rocha", "Rui Rocha", "Américo Silva"],
      extra: ["Zé Buraca", "Marcelo"] }
];

// ─── COMPETIÇÃO ───
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
    { data: "12 Set 2026", adversario: "Paços de Ferreira", casa: false, golosNos: 2, golosEles: 3, marcadores: ["Pedro Costa", "José Eduardo"] }
];

// ─── ATAS ───
const atas = [{
    data: "5 Ago 2026", titulo: "Reunião de Preparação da Época 2026/27",
    tags: [["decisao", "Decisão"], ["info", "Info"]], destaque: true,
    pontos: [
        "Caixa transitada da época anterior: €2.220.",
        "Campo — custo anual de €1.000 confirmado.",
        "Inscrição na AFA — custo de €50 por atleta: o atleta paga €30 e a caixa dos veteranos cobre €20 (total da caixa: €540 para 27 atletas).",
        "Massagista — valor a definir em reunião futura.",
        "Treinos todas as quartas-feiras às 21h00 e jogos ao sábado.",
        "Mensalidade definida em €20/mês a começar em Setembro.",
        "Atleta que não compareça a nenhum treino nem jogo num mês, não paga esse mês.",
        "Atletas não inscritos pagam €10/mês."
    ],
    presentes: "Pedro Melo (Presidente), Treinador Cadete, Pedro Costa, Rocha, André Pinho, Inácio, Romeu, Sérgio Freitas"
}];

// ─── HISTÓRICO ───
const historico = [
    { data: "12 Set 2026", tipo: "presenca", desc: "⚽ Jogo de treino vs Paços de Ferreira — derrota 2-3. Golos de Pedro Costa e José Eduardo. 18 inscritos + 2 extra (Zé Buraca, Marcelo)." },
    { data: "12 Set 2026", tipo: "aviso", desc: "🤝 Joel Tavares, Amílcar André e Hugo André pagaram a quota de sócio (€40 cada) diretamente ao clube principal." },
    { data: "10 Set 2026", tipo: "aviso", desc: "🤝 José Eduardo e Jorge Santos pagaram a quota de sócio (€40 cada) diretamente ao clube principal." },
    { data: "10 Set 2026", tipo: "pagamento", desc: "✅ António Oliveira pagou Setembro (€20) e inscrição (€30) — total €50." },
    { data: "10 Set 2026", tipo: "caixa", desc: "🧮 Saldo atualizado: inclui vendas de equipamento (€134), quotas mensais (€190) e inscrições recebidas (€180). Sócios entregues ao clube principal (não contam)." },
    { data: "10 Set 2026", tipo: "aviso", desc: "🤝 André Pinho pagou a quota de sócio (€40) diretamente ao clube principal." },
    { data: "9 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 9 de Setembro — 12 atletas presentes + 3 extra (Marcelo, Zé Buraca, Inácio)." },
    { data: "9 Set 2026", tipo: "pagamento", desc: "✅ Pagamentos recebidos: Mário Oliveira (Set+Insc €50), Américo Silva (Set+Insc €50), Sérgio Rodrigues (Set+Insc €50), Américo Oliveira (Set+Insc €50), Joel Tavares (Set+Insc €50), Pedro Cadete (Set €20), Marcelo (Set €10 + equip €47), Zé Buraca (equip €30)" },
    { data: "6 Set 2026", tipo: "venda", desc: "🛍️ Venda de equipamento: Telmo (Calções saída, Boné), Mário Oliveira (Boné), Vitor Leite (Calções saída, Polo), Marcelo (Calções saída, Polo, Boné, T-shirt), Zé Buraca (Calções saída, T-shirt, Boné) — Total €134 (entra na caixa)" },
    { data: "5 Set 2026", tipo: "despesa", desc: "Galhardetes do clube (20 unidades) — €200 no total (€10 cada)." },
    { data: "5 Set 2026", tipo: "despesa", desc: "Garrafões de água (4 × 6L) para torneio — €4 no total (€1 cada)." },
    { data: "4 Set 2026", tipo: "pagamento", desc: "✅ Pedro Costa pagou Setembro — €20/mês." },
    { data: "2 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 2 de Setembro — 18 atletas presentes + 4 extra (Telmo, Marcelo, Daniel Dias, Zé Buraca)." },
    { data: "2 Set 2026", tipo: "pagamento", desc: "Telmo pagou Setembro e Outubro — €10/mês (€20 no total)." },
    { data: "2 Set 2026", tipo: "aviso", desc: "Daniel Dias passou de não inscrito para inscrito (€20/mês); António José Silva passou de inscrito para não inscrito (€10/mês)." },
    { data: "5 Ago 2026", tipo: "ata", desc: "Reunião de preparação da época 2026/27 — definidas as quotas (€20 inscritos / €10 não inscritos), custo do campo (€1.000/ano) e inscrição na AFA (€50/atleta, €30 atleta + €20 caixa)." },
    { data: "5 Ago 2026", tipo: "caixa", desc: "Caixa transitada da época 2025/26: €2.220." },
    { data: "—", tipo: "despesa", desc: "Campo (época 2026/27) — €1.000, a pagar em Setembro." },
    { data: "—", tipo: "despesa", desc: "Inscrição na AFA (27 atletas × €20 da caixa) — €540, a pagar em Setembro." },
];

// ─── MAPAS AUXILIARES ───
const mesMap = { 9: 0, 10: 1, 11: 2, 12: 3, 1: 4, 2: 5, 3: 6, 4: 7, 5: 8, 6: 9 };
const mesNomes = { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' };
const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];