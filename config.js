/* =========================================================
   config.js — Ajustes internos
   ========================================================= */

// ─── PASSWORD DE ACESSO AO SITE (HASH SHA-256) ───
// Hash SHA-256 da password "adcl".
const SENHA_HASH = "db7c0fb81878ea0030e618a3e5c6fe30fcdd8b002ccc152581e4c509cac8d5a7";

// ─── ISENÇÕES ───
const ISENCOES = {
    "Zé Buraca": [0]
};

// ─── QUOTAS REDUZIDAS ───
const QUOTAS_REDUZIDAS = {
    "Amílcar André": { 0: 10 },
    // Fábio: €24/mês (20 quota + 4 sócio) em todos os meses
    "Fábio Gonçalves": { 0: 24, 1: 24, 2: 24, 3: 24, 4: 24, 5: 24, 6: 24, 7: 24, 8: 24, 9: 24 }
};

// ─── INSCRIÇÕES PAGAS PELA CAIXA ───
const INSCRICOES_PAGAS_CAIXA = [
    "Fábio Gonçalves"
];

// ─── SÓCIOS EM PRESTAÇÕES ───
// O valor total subiu para 50. Fábio já pagou 4€. Faltam 46€.
const SOCIOS_EM_PRESTACOES = {
    "Fábio Gonçalves": { total: 50, jaPago: 4 }
};

// ─── SÓCIOS QUE AINDA DEVEM 10€ AO CLUBE ───
// Pessoas que já entregaram os 40€ originais mas ainda não deram os 10€ da atualização.
// (Mário e Cadete já pagaram, por isso não estão aqui).
const SOCIOS_A_DEVER_10 = [
    "Pedro Ferreira", "Américo Oliveira", "António Oliveira", "Américo Silva",
    "Sérgio Freitas", "António José Silva", "Rui Rocha", "António Rocha",
    "Daniel Dias", "Luís Paiva", "Sergio Rodrigues", "Inácio", "Tiago Mota",
    "André Pinho", "Jorge Azevedo", "Hugo André", "Amílcar André", "José Eduardo",
    "Joel Tavares", "Pedro Costa"
];

// ─── MÉTODOS DE PAGAMENTO ───
const METODOS_PAGAMENTO = [
    { label: "MBWay",     valor: "918 792 243" },
    { label: "IBAN",      valor: "PT50 3560 0001 9001 8817 3283 5" },
    { label: "Numerário", valor: "Entregar ao tesoureiro" }
];

// ─── REDES SOCIAIS ───
const REDES_SOCIAIS = [
    { nome: "Instagram", url: "https://www.instagram.com/veteranos_adc_lobao?igsi=azR2ZXhjOHoyMzc0" },
    { nome: "Facebook",  url: "https://www.facebook.com/share/19fspGtMEr/?mibextid=wwXIfr" }
];
