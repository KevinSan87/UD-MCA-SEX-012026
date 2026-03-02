//Nome: Kevin de Santana Carvalho
let produtos = [
  { nome: "Camisa", preco: 50, estoque: 10 },
  { nome: "Calça", preco: 100, estoque: 5 },
  { nome: "Boné", preco: 30, estoque: 20 },
  { nome: "Jaqueta", preco: 200, estoque: 2 },
  { nome: "Meia", preco: 10, estoque: 50 },
  { nome: "Tênis", preco: 300, estoque: 3 },
  { nome: "Relógio", preco: 500, estoque: 1 },
  { nome: "Óculos", preco: 250, estoque: 6 },
  { nome: "Cinto", preco: 40, estoque: 8 },
  { nome: "Mochila", preco: 150, estoque: 4 }
];

// A
console.log("A) Qual é o preço do segundo objeto?");
console.log(produtos[1].preco);

// B
console.log("B) Qual é o nome do terceiro objeto?");
console.log(produtos[2].nome);

// C
console.log("C) Quantos itens existem no array?");
console.log(produtos.length);

// D
console.log("D) Nome de todos os objetos:");
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

// E
console.log("E) Somando o total de estoque:");
let soma = 0;

for (let i = 0; i < produtos.length; i++) {
  soma = soma + produtos[i].estoque;
}

console.log(soma);

// F
console.log("F) Qual objeto possui maior estoque?");
let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maior.estoque) {
    maior = produtos[i];
  }
}

console.log(maior);


//Nome: Gustavo de Cassio Gomes Perez - 823116201
let produtosGustavo = [
  { nome: 'notebook', preco: 1500, estoque: 15 },
  { nome: 'mouse', preco: 50, estoque: 120 },
  { nome: 'teclado', preco: 120, estoque: 80 },
  { nome: 'monitor', preco: 900, estoque: 25 },
  { nome: 'impressora', preco: 650, estoque: 18 },
  { nome: 'cadeira gamer', preco: 1100, estoque: 12 },
  { nome: 'mesa escritório', preco: 750, estoque: 10 },
  { nome: 'headset', preco: 200, estoque: 60 },
  { nome: 'webcam', preco: 180, estoque: 40 },
  { nome: 'HD externo', preco: 400, estoque: 30 },
  { nome: 'pen drive 64GB', preco: 70, estoque: 150 }
];

// A. Qual é o preço do segundo objeto?
//  produtos[1].preco -->  50

// B. Qual é o nome do terceiro objeto?
//  produtos[2].nome --> teclado 

// C. Quantos itens existem no array?
// produtos.length() --> 11

// D. Imprima o nome de todos os objetos.
for(let i = 0 ; i <= produtos.length ; i++){
    console.log(produtos[i].nome);
}
// E. Some o total de estoque de todos os objetos.

let totalEstoque = 0
for(let i = 0 ; i <= produtos.length ; i++){
    totalEstoque += produtos[i].estoque;
}

// F. Qual objeto possui maior estoque?
// pen drive 64GB
// Nome:Heloisy Aparecida RA:82320268
let catalogoJogos = [
    { nome: 'Call of Duty', preco: 350, estoque: 10 },
    { nome: 'The Sims 4', preco: 0, estoque: 100 },
    { nome: 'Diablo IV', preco: 340, estoque: 5 },
    { nome: 'Final Fantasy XVI', preco: 300, estoque: 8 },
    { nome: 'Street Fighter 6', preco: 280, estoque: 12 },
    { nome: 'Hogwarts Legacy', preco: 250, estoque: 20 },
    { nome: 'Dead Space', preco: 320, estoque: 6 },
    { nome: 'Starfield', preco: 299, estoque: 15 },
    { nome: 'Mortal Kombat 1', preco: 270, estoque: 9 },
    { nome: 'Baldur Gate 3', preco: 199, estoque: 30 }
];

console.log("Meu catálogo de 10 jogos:", catalogoJogos);
