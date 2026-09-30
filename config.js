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
// Hash SHA-256 da password "adcl".
// Para mudar a password mais tarde:
//   1. Abre qualquer página, F12 → Console
//   2. Cola:
//      crypto.subtle.digest('SHA-256', new TextEncoder().encode('NOVA_PASSWORD'))
//        .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,'0')).join('')))
//   3. Substitui o hash abaixo pelo novo.
//
// ⚠️ Nota: como o site é 100% estático, este sistema afasta
// curiosos mas não é segurança a sério (alguém que saiba JS
// pode contornar via DevTools). Para segurança real, usar
// Cloudflare Access.
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
    "Amílcar André": { 0: 10 }  // Setembro — €10 (excesso da quota de sócio, €50 pagos ao clube)
};
