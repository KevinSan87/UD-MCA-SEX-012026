//Nome: Kevin de Santana Carvalho
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


//Nome: Gustavo de Cassio Gomes Perez - 823116201
let produto = {
    nome:'notebook',
    cor:'branco',
    preco: 1500,
    estoque: 5,
};

//A. Como acessar o nome do objeto?
// usando produto.nome --> console.log(produto.nome);

//B. Como acessar o preço usando colchetes?
// produto['preco'] --> console.log(produto['preco']);

//C. Atualize o estoque para 80.
produto.estoque = 80;

//D. Imprima todas as propriedades no console.
console.log(produto);
