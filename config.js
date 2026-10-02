/* =========================================================
   config.js — Ajustes internos
   Este ficheiro é lido pelo index.html mas não é referido
   em nenhum sítio da interface. Corrige situações excecionais
   aprovadas pela direção dos veteranos.

   REGRA:
   - Isenções e quotas reduzidas mostram-se como pagas normais
     na interface e nos recibos.
   - Só as contas internas (saldo) refletem o valor real.
   ========================================================= */

// ─── PASSWORD DE ACESSO AO SITE (HASH SHA-256) ───
const SENHA_HASH = "db7c0fb81878ea0030e618a3e5c6fe30fcdd8b002ccc152581e4c509cac8d5a7";

// ─── ISENÇÕES ───
// Aparece como pago mas não houve entrada na caixa
// { "Nome": [índices de meses isentos] }  (0=Set, 1=Out, 2=Nov, ...)
const ISENCOES = {
    "Zé Buraca": [0]  // Setembro — isento pela direção
};

// ─── QUOTAS REDUZIDAS ───
// Aparece como pago mas entrou valor diferente do padrão
// { "Nome": { índiceMes: valorEfetivo } }
const QUOTAS_REDUZIDAS = {
    "Amílcar André": { 0: 10 },  // Setembro — €10 (excesso da quota de sócio, €50 pagos ao clube)
    "Fábio Gonçalves": { 0: 24 } // Setembro — €20 cota + €4 (1ª prestação dos €40 de sócio, diluído em 10 meses)
};

// ─── INSCRIÇÕES PAGAS PELA CAIXA ───
// Casos especiais em que a caixa dos veteranos paga a inscrição AFA por inteiro.
// No site aparecem como "Paga pela caixa" e não contam como receita.
const INSCRICOES_PAGAS_CAIXA = [
    "Fábio Gonçalves"
];

// ─── SÓCIOS EM PRESTAÇÕES ───
// Sócios cujo valor (€40) está a ser pago por prestações mensais,
// diluído na quota. Conta apenas o que já entrou na caixa.
// { "Nome": { total: 40, jaPago: 4 } }
const SOCIOS_EM_PRESTACOES = {
    "Fábio Gonçalves": { total: 40, jaPago: 4 }
};