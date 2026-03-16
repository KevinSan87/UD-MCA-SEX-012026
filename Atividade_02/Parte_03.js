//Nome: Gabriel Dias de Moraes Ferreira - 825157250

let docesVariados = [
  { nome: 'Brigadeiro', preco: 1, estoque: 30 },
  { nome: 'Pudim', preco: 40, estoque: 5 },
  { nome: 'Quindim', preco: 3, estoque: 20 },
  { nome: 'Brownie', preco: 15, estoque: 10 },
  { nome: 'Churros', preco: 5, estoque: 3 },
  { nome: 'Beijinho', preco: 1, estoque: 40 },
  { nome: 'Bolo de cenoura', preco: 45, estoque: 2 },
  { nome: 'Torta de Limão', preco: 50, estoque: 4 },
  { nome: 'Bomba de chocolate', preco: 6, estoque: 12 },
  { nome: 'Trufa', preco: 4, estoque: 15 },
  { nome: 'Donuts', preco: 8, estoque: 25 }
];

//A. Qual é o preço do segundo objeto?
console.log(docesVariados[1].preco); // 40

//B. Qual é o nome do terceiro objeto?
console.log(docesVariados[2].nome); // Quindim

//C. Quantos itens existem no array?
console.log(docesVariados.length); // 10

//D. Imprima o nome de todos os objetos.
for (let i = 0; i < docesVariados.length; i++) {
  console.log(docesVariados[i].nome);
}

//E. Some o total de estoque de todos os objetos.
let valorTotal = 0;

for (let i = 0; i < docesVariados.length; i++) {
  valorTotal = valorTotal + docesVariados[i].estoque;
}
console.log(valorTotal)

//F. Qual objeto possui maior estoque?
// Beijinho, com 40