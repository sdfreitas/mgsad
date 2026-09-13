/* =========================================================
   _privado.js — Ajustes internos
   Este ficheiro é lido pelo index.html mas não é referido
   em nenhum sítio da interface. Corrige situações excecionais
   aprovadas pela direção dos veteranos.
   ========================================================= */

// Isenções — aparece como pago mas não houve entrada na caixa
// { "Nome": [índices de meses isentos] }  (0=Set, 1=Out, 2=Nov, ...)
const ISENCOES = {
    "Zé Buraca": [0]  // Setembro — isento pela direção
};

// Quotas reduzidas — aparece como pago mas entrou valor diferente do padrão
// { "Nome": { índiceMes: valorEfetivo } }
const QUOTAS_REDUZIDAS = {
    "Amílcar André": { 0: 10 }  // Setembro — €10 (excesso da quota de sócio)
};
