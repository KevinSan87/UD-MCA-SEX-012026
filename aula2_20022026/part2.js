let produto = {
nome: 'Camiseta',
cor: 'Preta',
preco: 59.90,
estoque: 50
};

console.log(produto.nome);

console.log(produto["preco"]);

produto.estoque = 80;

console.log("Nome:", produto.nome);
console.log("Cor:", produto.cor);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);
