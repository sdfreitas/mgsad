const movimentos=[

{data:"02/01",descricao:"Quota João",tipo:"Receita",valor:30},
{data:"02/01",descricao:"Quota Carlos",tipo:"Receita",valor:30},
{data:"05/01",descricao:"Patrocínio Café",tipo:"Receita",valor:200},

{data:"08/01",descricao:"Equipamentos",tipo:"Despesa",valor:-180},
{data:"10/01",descricao:"Água",tipo:"Despesa",valor:-20},
{data:"12/01",descricao:"Arbitragem",tipo:"Despesa",valor:-45},
{data:"18/01",descricao:"Jantar Equipa",tipo:"Despesa",valor:-120}

];

let receitas=0;
let despesas=0;

movimentos.forEach(m=>{

if(m.valor>0)
receitas+=m.valor;
else
despesas+=Math.abs(m.valor);

});

const saldo=receitas-despesas;

document.getElementById("saldo").innerHTML=saldo.toFixed(2)+" €";
document.getElementById("receitas").innerHTML=receitas.toFixed(2)+" €";
document.getElementById("despesas").innerHTML=despesas.toFixed(2)+" €";

const tabela=document.getElementById("tabela");

movimentos.forEach(m=>{

tabela.innerHTML+=`
<tr>
<td>${m.data}</td>
<td>${m.descricao}</td>
<td>${m.tipo}</td>
<td>${m.valor} €</td>
</tr>
`;

});

new Chart(document.getElementById("grafico1"),{

type:"bar",

data:{
labels:["Receitas","Despesas"],
datasets:[{
label:"Euros",
data:[receitas,despesas]
}]
}

});

new Chart(document.getElementById("grafico2"),{

type:"pie",

data:{
labels:["Equipamentos","Água","Arbitragem","Jantar"],
datasets:[{
data:[180,20,45,120]
}]
}

});