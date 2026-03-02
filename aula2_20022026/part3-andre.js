// PARTE 3 (ARRAY DE OBJETOS) -  André Castanheda


let produtos = [
{ nome: "Mouse", preco: 80, estoque: 25 },
{ nome: "Teclado", preco: 120, estoque: 18 },
{ nome: "Monitor", preco: 900, estoque: 10 },
{ nome: "Notebook", preco: 3500, estoque: 5 },
{ nome: "Headset", preco: 200, estoque: 30 },
{ nome: "Webcam", preco: 150, estoque: 12 },
{ nome: "Microfone", preco: 300, estoque: 7 },
{ nome: "HD Externo", preco: 400, estoque: 9 },
{ nome: "SSD", preco: 500, estoque: 14 },
{ nome: "Cadeira Gamer", preco: 1200, estoque: 6 }
];


// A) Qual é o preço do segundo objeto?

console.log("Preço do segundo produto:", produtos[1].preco);


// B) Qual é o nome do terceiro objeto?

console.log("Nome do terceiro produto:", produtos[2].nome);


// C) Quantos itens existem no array?

console.log("Quantidade de produtos:", produtos.length);


// D) Imprima o nome de todos os objetos.

console.log("Lista de produtos:");

for (let i = 0; i < produtos.length; i++) {
console.log(produtos[i].nome);
}


// E) Some o total de estoque de todos os objetos.

let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
totalEstoque += produtos[i].estoque;
}

console.log("Total de itens em estoque:", totalEstoque);


// F) Qual objeto possui maior estoque?

let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
if (produtos[i].estoque > maiorEstoque.estoque) {
maiorEstoque = produtos[i];
}
}

console.log("Produto com maior estoque:", maiorEstoque.nome);
console.log("Quantidade:", maiorEstoque.estoque);
