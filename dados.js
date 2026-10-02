/* =========================================================
   dados.js - Todos os dados editáveis do site dos Veteranos
   Basta editar este ficheiro para atualizar o site inteiro.
   ========================================================= */

// --- CONSTANTES GERAIS ---
const MESES = ["Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
const QUOTA = 20;
const QUOTA_NI = 10;
const SALDO_INICIAL = 2220;
const valorInscricao = 30;
const valorSocio = 40;

// --- PLANTEL ---
const inscritos = [
    { nome: "André Pinho", apelido: "PINHO", num: 30, nasc: "13/12/1984" },
    { nome: "Américo Oliveira", apelido: "AMÉRICO", num: 13, nasc: "10/08/1982" },
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
    { nome: "Jorge Azevedo", apelido: "JORGE", num: 23, nasc: "28/09/1989" },
    { nome: "Américo Silva", apelido: "AMÉRICO SILVA", num: 88, nasc: "12/10/1979" },
    { nome: "Tiago Mota", apelido: "MOTINHA", num: 98, nasc: "28/02/1990" },
    { nome: "José Eduardo", apelido: "ZÉ EDUARDO", num: 5, nasc: "01/09/1985" },
    { nome: "Sergio Rodrigues", apelido: "RODRIGUES", num: 25, nasc: "01/11/1983" },
    { nome: "Joel Tavares", apelido: "JOEL", num: 3, nasc: "27/09/1981" },
    { nome: "Fábio Gonçalves", apelido: "FÁBIO", num: null, nasc: "13/07/1990" },
    { nome: "Miguel Almeida", apelido: "MIGUEL", num: 19, nasc: "10/05/1974" },
    { nome: "Sergio Silva", apelido: "SERGINHO", num: 4, nasc: "01/01/1988" },
    { nome: "Daniel Dias", apelido: "DANIEL", num: null, nasc: "10/03/1982" }
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
    { nome: "Sérgio Tavares", apelido: "TAVARES", num: 27, nasc: "10/10/1984" }
];

// --- PAGAMENTOS DE QUOTAS (índices = posição em MESES) ---
// ATENÇÃO: Amílcar André, Zé Buraca e Fábio Gonçalves NÃO entram aqui (ajustes em config.js)
const pagamentos = {
    "Pedro Costa": [0, 1],
    "Telmo": [0, 1],
    "Mário Oliveira": [0, 1],
    "Américo Silva": [0],
    "Sergio Rodrigues": [0],
    "Américo Oliveira": [0, 1, 2],
    "Joel Tavares": [0],
    "Marcelo": [0],
    "Pedro Cadete": [0],
    "António Oliveira": [0],
    "André Pinho": [0],
    "Rui Rocha": [0, 1, 2, 3, 4, 5],
    "António Rocha": [0, 1, 2, 3, 4, 5],
    "Jorge Azevedo": [0],
    "Pedro Ferreira": [0],
    "Sérgio Freitas": [0],
    "José Eduardo": [0, 1, 2, 3],
    "António José Silva": [0, 1],
    "Hugo André": [0],
    "Daniel Dias": [0],
    "Luís Paiva": [0],
    "Inácio": [0],
    "Tiago Mota": [0]
};

// --- INSCRIÇÕES PAGAS (pelo próprio atleta) ---
// Caso especial "Fábio Gonçalves" (inscrição paga pela caixa) está no config.js
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
    "Tiago Mota"
];

// --- SÓCIOS PAGOS ---
// Caso especial "Fábio Gonçalves" (em prestações) está no config.js
const sociosPagos = [
    "Pedro Cadete",
    "André Pinho",
    "José Eduardo",
    "Jorge Azevedo",
    "Joel Tavares",
    "Amílcar André",
    "Hugo André",
    "Pedro Ferreira",
    "Mário Oliveira",
    "Américo Oliveira",
    "António Oliveira",
    "Américo Silva",
    "Sérgio Freitas",
    "António José Silva",
    "Rui Rocha",
    "António Rocha",
    "Daniel Dias",
    "Luís Paiva",
    "Sergio Rodrigues",
    "Inácio",
    "Tiago Mota"
];

// --- SÓCIOS QUE PAGARAM DIRETAMENTE AO CLUBE PRINCIPAL ---
const sociosPagoAoClube = [
    "André Pinho",
    "Jorge Azevedo",
    "Hugo André",
    "Amílcar André",
    "José Eduardo",
    "Joel Tavares",
    "Luís Paiva",
    "Tiago Mota"
];

// --- MERENDAS / FARNEL PAGOS ---
const merendaPaga = [
    "Zé Buraca",
    "Américo Oliveira",
    "José Eduardo",
    "Joel Tavares",
    "Jorge Azevedo"
];

// --- DESPESAS CONFIRMADAS ---
const despesaCampo = 1000;
const despesaAFA = 490;   // 23 atletas × €20 + €30 extra (caso especial Fábio Gonçalves: caixa paga a inscrição por inteiro, €50 em vez de €20)
const despesaAgua = 4;
const despesaGalhardetes = 200;

// --- ESTADO DAS DESPESAS ---
const DESPESAS_PAGAS = {
    campo: false,
    afa: false,
    galhardetes: true,
    agua: true
};

// --- DESPESAS EXTRA (variáveis, ao longo da época) ---
const despesasExtras = [
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
    { nome: "Telmo", itens: ["Calções saída", "Boné"], pago: false },
    { nome: "Mário Oliveira", itens: ["Boné"], pago: true },
    { nome: "Vitor Leite", itens: ["Calções saída", "Polo"], pago: false },
    { nome: "Marcelo", itens: ["Calções saída", "Polo", "Boné", "T-shirt"], pago: true },
    { nome: "Zé Buraca", itens: ["Calções saída", "T-shirt", "Boné"], pago: true }
];

// --- TREINOS E JOGOS (presenças) ---
const treinosJogos = [
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
      extra: ["Marcelo", "Zé Buraca", "Telmo"] }
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
                "André Pinho",
                "Pedro Cadete",
                "Jorge Azevedo",
                "Rui Rocha",
                "António Rocha",
                "Mário Oliveira",
                "Sérgio Freitas",
                "Américo Silva",
                "Pedro Ferreira",
                "Joel Tavares",
                "Zé Buraca",
                "Amílcar André",
                "José Eduardo",
                "Hugo André",
                "Daniel Dias",
                "Américo Oliveira",
                "Fábio Gonçalves",
                "Pedro Costa",
                "Marcelo",
                "Sergio Rodrigues"
            ]
        }
    }
];

// --- ATAS ---
const atas = [
    {
        data: "2 Out 2026", titulo: "Caso especial — Fábio Gonçalves (época 2026/27)",
        tags: [["decisao", "Decisão"], ["urgente", "Urgente"]], destaque: false,
        pontos: [
            "Fábio Gonçalves — caso especial aprovado pela direção.",
            "Inscrição AFA: a caixa paga os 50 EUR por inteiro (em vez dos 20 EUR habituais). Acresce 30 EUR à despesa AFA da época.",
            "Quota de sócio: os 40 EUR são diluídos em 4 EUR/mês (Set a Jun), ficando a quota mensal em 24 EUR.",
            "No total, o atleta paga 240 EUR até ao final da época (10 × 24 EUR).",
            "Válido de Setembro 2026 a Junho 2027."
        ],
        presentes: "Direção dos Veteranos A.D.C. Lobão"
    },
    {
        data: "5 Ago 2026", titulo: "Reunião de Preparação da Época 2026/27",
        tags: [["decisao", "Decisão"], ["info", "Info"]], destaque: true,
        pontos: [
            "Caixa transitada da época anterior: 2.220 EUR.",
            "Campo - custo anual de 1.000 EUR confirmado.",
            "Inscrição na AFA - custo de 50 EUR por atleta: o atleta paga 30 EUR e a caixa dos veteranos cobre 20 EUR.",
            "Massagista - valor a definir em reunião futura.",
            "Treinos todas as quartas-feiras às 21h00 e jogos ao sábado.",
            "Mensalidade definida em 20 EUR/mês a começar em Setembro.",
            "Atleta que não compareça a nenhum treino nem jogo num mês, não paga esse mês.",
            "Atletas não inscritos pagam 10 EUR/mês."
        ],
        presentes: "Pedro Melo (Presidente), Treinador Cadete, Pedro Costa, Rocha, André Pinho, Inácio, Romeu, Sérgio Freitas"
    }
];

// --- HISTÓRICO ---
const historico = [
    { data: "2 Out 2026", tipo: "pagamento", desc: "✅ Fábio Gonçalves pagou Setembro (24 EUR)." },
    { data: "1 Out 2026", tipo: "pagamento", desc: "✅ Tiago Mota pagou Setembro (20 EUR), a inscrição AFA (30 EUR) e a quota de sócio (40 EUR) diretamente ao clube principal - total 90 EUR." },
    { data: "1 Out 2026", tipo: "pagamento", desc: "✅ Inácio pagou Setembro como não inscrito (10 EUR) e a quota de sócio (40 EUR) ao tesoureiro - total 50 EUR." },
    { data: "1 Out 2026", tipo: "pagamento", desc: "✅ Sergio Rodrigues pagou o árbitro do amigável vs Paços de Ferreira (5 EUR) e a quota de sócio (40 EUR) ao tesoureiro - total 45 EUR. Árbitro do amigável 100% recebido (20/20)." },
    { data: "30 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 30 de Setembro - 17 atletas presentes + 3 extra (Marcelo, Zé Buraca, Telmo)." },
    { data: "30 Set 2026", tipo: "pagamento", desc: "✅ Marcelo pagou o árbitro do amigável vs Paços de Ferreira (5 EUR)." },
    { data: "30 Set 2026", tipo: "pagamento", desc: "✅ Pagamentos recebidos (30 Set) — total 645 EUR: Sérgio Freitas (Set + inscrição + sócio ao tesoureiro) 90 EUR · José Eduardo (Set + inscrição + árbitro + Out/Nov/Dez) 115 EUR · Daniel Dias (Set + inscrição + árbitro + sócio ao tesoureiro) 95 EUR · António José Silva 'Tozé' (Set+Out + sócio ao tesoureiro) 60 EUR · Américo Oliveira (árbitro + Out + Nov) 45 EUR · Rui Rocha (sócio ao tesoureiro) 40 EUR · António Rocha (sócio ao tesoureiro) 40 EUR · Hugo André (Set + árbitro) 25 EUR · Pedro Costa (árbitro + Out) 25 EUR · Mário Oliveira (Out) 20 EUR · Luís Paiva (Set como não inscrito) 10 EUR · Fábio Gonçalves (árbitro) 5 EUR." },
    { data: "30 Set 2026", tipo: "aviso", desc: "⚠️ Sérgio Tavares passou de inscrito para não inscrito (20 EUR/mês -> 10 EUR/mês). Inscrição AFA ajustada para 24 atletas (480 EUR)." },
    { data: "30 Set 2026", tipo: "aviso", desc: "⚠️ Luís Paiva passou de inscrito para não inscrito (20 EUR/mês -> 10 EUR/mês). Inscrição AFA ajustada para 23 atletas (460 EUR)." },
    { data: "30 Set 2026", tipo: "aviso", desc: "🍽️ Joel Tavares e Jorge Azevedo vão pagar o farnel dos seus aniversários (Setembro). Marcados na grelha de Aniversários com 🍽️." },
    { data: "26 Set 2026", tipo: "presenca", desc: "⚽ Jogo amigável vs Paços de Ferreira (fora) - derrota 2-4. Golos de José Eduardo e Marcelo. 15 inscritos + 2 extra (Marcelo, Zé Buraca)." },
    { data: "26 Set 2026", tipo: "aviso", desc: "⚠️ Armando passou de inscrito para não inscrito (20 EUR/mês -> 10 EUR/mês). Inscrição AFA ajustada para 25 atletas (500 EUR)." },
    { data: "26 Set 2026", tipo: "despesa", desc: "🧾 Merenda para o jogo amigável vs Paços de Ferreira - fruta, 2x água 5L, bolachas Maria, chá e 50 copos 200ml - 15,19 EUR (pago pela caixa)." },
    { data: "26 Set 2026", tipo: "pagamento", desc: "✅ Amílcar André pagou a inscrição AFA (30 EUR) e o árbitro do amigável vs Paços de Ferreira (5 EUR) - total 35 EUR." },
    { data: "26 Set 2026", tipo: "aviso", desc: "🤝 Américo Silva pagou a quota de sócio (40 EUR) ao tesoureiro." },
    { data: "24 Set 2026", tipo: "aviso", desc: "🤝 António Oliveira pagou a quota de sócio (40 EUR) ao tesoureiro." },
    { data: "24 Set 2026", tipo: "aviso", desc: "⚠️ Correção de registo: o Joel Tavares também entregou a quota de sócio (40 EUR) diretamente ao clube principal - não tinha sido contabilizado. Com ele, são 6 os sócios que já pagaram ao clube (André Pinho, Jorge Azevedo, Hugo André, Amílcar André, José Eduardo e Joel Tavares)." },
    { data: "24 Set 2026", tipo: "aviso", desc: "⚠️ André Lopes não vai participar esta época - retirado do plantel. Inscrição AFA ajustada para 26 atletas (520 EUR)." },
    { data: "23 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 23 de Setembro - 14 atletas presentes + 3 extra (Marcelo, Zé Buraca, Telmo)." },
    { data: "23 Set 2026", tipo: "pagamento", desc: "✅ Pagamentos recebidos: Américo Silva (árbitro 5 EUR), Pedro Ferreira (árbitro 5 EUR), Joel Tavares (árbitro 5 EUR), Zé Buraca (árbitro 5 EUR), Mário Oliveira (boné 5 EUR), Pedro Costa (inscrição 30 EUR), Jorge Azevedo (inscrição 30 EUR), Pedro Cadete (inscrição 30 EUR) - total 113 EUR." },
    { data: "23 Set 2026", tipo: "aviso", desc: "🤝 Mário Oliveira e Américo Oliveira pagaram a quota de sócio (40 EUR cada)." },
    { data: "18 Set 2026", tipo: "pagamento", desc: "✅ André Pinho pagou Setembro (20 EUR) e inscrição (30 EUR) - total 50 EUR." },
    { data: "16 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 16 de Setembro - 13 atletas presentes + 3 extra (Marcelo, Zé Buraca, Telmo)." },
    { data: "16 Set 2026", tipo: "pagamento", desc: "✅ Sérgio Freitas pagou o árbitro do amigável vs Paços de Ferreira (5 EUR) e Pedro Ferreira pagou Setembro (20 EUR), inscrição (30 EUR) e quota de sócio (40 EUR) - total recebido: 95 EUR." },
    { data: "13 Set 2026", tipo: "pagamento", desc: "✅ Amílcar André e Zé Buraca pagaram Setembro (20 EUR e 10 EUR)." },
    { data: "12 Set 2026", tipo: "pagamento", desc: "✅ Rui Rocha e António Rocha entregaram 300 EUR (150 EUR cada) - inscrição AFA (30 EUR) + quotas Set a Fev (6 x 20 EUR = 120 EUR) por atleta." },
    { data: "12 Set 2026", tipo: "pagamento", desc: "✅ Árbitro do amigável vs Paços de Ferreira - André Pinho, Pedro Cadete, Jorge Azevedo, Rui Rocha, António Rocha e Mário Oliveira pagaram 5 EUR cada (30 EUR recebidos)." },
    { data: "12 Set 2026", tipo: "presenca", desc: "⚽ Jogo de treino vs Paços de Ferreira - derrota 2-3. Golos de Pedro Costa e José Eduardo. 18 inscritos + 2 extra (Zé Buraca, Marcelo)." },
    { data: "12 Set 2026", tipo: "despesa", desc: "👤 Árbitro do amigável vs Paços de Ferreira - 5 EUR x 20 participantes = 100 EUR (pago pela caixa)." },
    { data: "12 Set 2026", tipo: "aviso", desc: "🤝 Joel Tavares, Amílcar André e Hugo André pagaram a quota de sócio (40 EUR cada) diretamente ao clube principal." },
    { data: "12 Set 2026", tipo: "pagamento", desc: "✅ Jorge Azevedo pagou Setembro - 20 EUR/mês." },
    { data: "10 Set 2026", tipo: "aviso", desc: "🤝 José Eduardo e Jorge Azevedo pagaram a quota de sócio (40 EUR cada) diretamente ao clube principal." },
    { data: "10 Set 2026", tipo: "pagamento", desc: "✅ António Oliveira pagou Setembro (20 EUR) e inscrição (30 EUR) - total 50 EUR." },
    { data: "10 Set 2026", tipo: "caixa", desc: "🧮 Saldo atualizado: inclui vendas de equipamento (134 EUR), quotas mensais (190 EUR) e inscrições recebidas (180 EUR). Sócios entregues ao clube principal (não contam)." },
    { data: "10 Set 2026", tipo: "aviso", desc: "🤝 André Pinho pagou a quota de sócio (40 EUR) diretamente ao clube principal." },
    { data: "9 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 9 de Setembro - 12 atletas presentes + 3 extra (Marcelo, Zé Buraca, Inácio)." },
    { data: "9 Set 2026", tipo: "pagamento", desc: "✅ Pagamentos recebidos: Mário Oliveira (Set+Insc 50 EUR), Américo Silva (Set+Insc 50 EUR), Sérgio Rodrigues (Set+Insc 50 EUR), Américo Oliveira (Set+Insc 50 EUR), Joel Tavares (Set+Insc 50 EUR), Pedro Cadete (Set 20 EUR), Marcelo (Set 10 EUR + equip 47 EUR), Zé Buraca (equip 30 EUR)" },
    { data: "6 Set 2026", tipo: "venda", desc: "🛍️ Venda de equipamento: Telmo (Calções saída, Boné), Mário Oliveira (Boné), Vitor Leite (Calções saída, Polo), Marcelo (Calções saída, Polo, Boné, T-shirt), Zé Buraca (Calções saída, T-shirt, Boné) - Total 134 EUR (entra na caixa)" },
    { data: "5 Set 2026", tipo: "despesa", desc: "Galhardetes do clube (20 unidades) - 200 EUR no total (10 EUR cada)." },
    { data: "5 Set 2026", tipo: "despesa", desc: "Garrafões de água (4 x 6L) para torneio - 4 EUR no total (1 EUR cada)." },
    { data: "4 Set 2026", tipo: "pagamento", desc: "✅ Pedro Costa pagou Setembro - 20 EUR/mês." },
    { data: "2 Set 2026", tipo: "presenca", desc: "🏃 Treino registado a 2 de Setembro - 18 atletas presentes + 4 extra (Telmo, Marcelo, Daniel Dias, Zé Buraca)." },
    { data: "2 Set 2026", tipo: "pagamento", desc: "Telmo pagou Setembro e Outubro - 10 EUR/mês (20 EUR no total)." },
    { data: "2 Set 2026", tipo: "aviso", desc: "Daniel Dias passou de não inscrito para inscrito (20 EUR/mês); António José Silva passou de inscrito para não inscrito (10 EUR/mês)." },
    { data: "5 Ago 2026", tipo: "ata", desc: "Reunião de preparação da época 2026/27 - definidas as quotas (20 EUR inscritos / 10 EUR não inscritos), custo do campo (1.000 EUR/ano) e inscrição na AFA (50 EUR/atleta, 30 EUR atleta + 20 EUR caixa)." },
    { data: "5 Ago 2026", tipo: "caixa", desc: "Caixa transita da época 2025/26: 2.220 EUR." },
    { data: "-", tipo: "despesa", desc: "Campo (época 2026/27) - 1.000 EUR, a pagar em Setembro." },
    { data: "-", tipo: "despesa", desc: "Inscrição na AFA (23 atletas x 20 EUR da caixa + 30 EUR extra do caso especial Fábio Gonçalves) - 490 EUR, a pagar em Setembro." }
];

// --- NOTÍCIAS ---
// Mostradas no Resumo (homepage). Ordem: da mais recente para a mais antiga.
// tag: "jogo" (azul) / "treino" (verde) / "aviso" (laranja) / "convivio" (dourado) / "info" (cinza)
const noticias = [
    {
        data: "24 Set 2026",
        tag: "jogo",
        titulo: "⚽ Jogo com o Bustelo a 10 de Outubro em casa",
        corpo: "No dia 10 de outubro temos jogo com o Bustelo no nosso estádio. Contamos com todos!"
    },
    {
        data: "18 Set 2026",
        tag: "jogo",
        titulo: "🏆 O campeonato começa a 17 de Outubro",
        corpo: "Já temos data para o arranque oficial. Vamos com tudo!"
    },
    {
        data: "18 Set 2026",
        tag: "treino",
        titulo: "⚽ Jogo de treino a 3 de Outubro em casa com o Sandim",
        corpo: "Mais um teste antes do campeonato. Contamos com todos."
    }
];

// --- MAPAS AUXILIARES ---
const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];