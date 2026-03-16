let produtos = [
{ nome: 'Mouse', preco: 50, estoque: 30 },
{ nome: 'Teclado', preco: 120, estoque: 20 },
{ nome: 'Monitor', preco: 900, estoque: 15 },
{ nome: 'Notebook', preco: 3500, estoque: 10 },
{ nome: 'Cadeira', preco: 600, estoque: 25 },
{ nome: 'Mesa', preco: 800, estoque: 12 },
{ nome: 'Headset', preco: 200, estoque: 40 },
{ nome: 'Webcam', preco: 150, estoque: 18 },
{ nome: 'Microfone', preco: 300, estoque: 22 },
{ nome: 'HD Externo', preco: 400, estoque: 17 }
];

console.log("Preço do segundo objeto:", produtos[1].preco);

console.log("Nome do terceiro objeto:", produtos[2].nome);

console.log("Total de itens:", produtos.length);

for (let i = 0; i < produtos.length; i++) {
console.log(produtos[i].nome);
}

let totalEstoque = 0;""

for (let i = 0; i < produtos.length; i++) {
totalEstoque += produtos[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
if (produtos[i].estoque > maior.estoque) {
maior = produtos[i];
}
}

console.log("Produto com maior estoque:", maior);
