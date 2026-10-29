/* =========================================================
   config.js — Ajustes internos
   ========================================================= */

// ─── PASSWORD DE ACESSO AO SITE (HASH SHA-256) ───
const SENHA_HASH = "db7c0fb81878ea0030e618a3e5c6fe30fcdd8b002ccc152581e4c509cac8d5a7";

// ─── LINK DO SITE (Para a partilha do WhatsApp) ───
// ALTERA AQUI para o link verdadeiro do teu site no GitHub Pages!
const URL_SITE = "https://veteranosadclobao.github.io/";

// ─── ISENÇÕES ───
const ISENCOES = {};

// ─── QUOTAS REDUZIDAS ───
const QUOTAS_REDUZIDAS = {
    "Amílcar André": { 0: 10 },
    "Fábio Gonçalves": { 0: 24, 1: 25, 2: 25, 3: 25, 4: 25, 5: 25, 6: 25, 7: 25, 8: 25, 9: 26 }
};

// ─── INSCRIÇÕES PAGAS PELA CAIXA ───
const INSCRICOES_PAGAS_CAIXA = [
    "Fábio Gonçalves"
];

// ─── SÓCIOS EM PRESTAÇÕES ───
const SOCIOS_EM_PRESTACOES = {
    "Fábio Gonçalves": { total: 50, jaPago: 4 }
};

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
