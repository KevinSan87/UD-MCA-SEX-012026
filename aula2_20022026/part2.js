let produto = {
  nome: "Celular",
  cor: "Preto",
  preco: 1500,
  estoque: 40
};

// A
console.log("A) Como acessar o nome do objeto?");
console.log(produto.nome);

// B
console.log("B) Como acessar o preço usando colchetes?");
console.log(produto["preco"]);

// C
console.log("C) Atualizando estoque para 80...");
produto.estoque = 80;
console.log(produto.estoque);

// D
console.log("D) Imprimindo todas as propriedades:");
console.log("Nome:", produto.nome);
console.log("Cor:", produto.cor);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);