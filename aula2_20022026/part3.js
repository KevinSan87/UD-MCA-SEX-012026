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