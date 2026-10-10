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

// ─── MÉTODOS DE PAGAMENTO (mostrados no separador Quotas) ───
// Ordem apresentada = ordem deste array
const METODOS_PAGAMENTO = [
    { label: "MBWay",     valor: "918 792 243" },
    { label: "IBAN",      valor: "PT50 3560 0001 9001 8817 3283 5" },
    { label: "Numerário", valor: "Entregar ao tesoureiro" }
];

// ─── REDES SOCIAIS (mostradas no rodapé) ───
const REDES_SOCIAIS = [
    { nome: "Instagram", url: "https://www.instagram.com/veteranos_adc_lobao?igsi=azR2ZXhjOHoyMzc0" },
    { nome: "Facebook",  url: "https://www.facebook.com/share/19fspGtMEr/?mibextid=wwXIfr" }
];