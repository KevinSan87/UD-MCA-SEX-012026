//Nome: Kevin de Santana Carvalho RA:823210275
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

//===================================================================================================================
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

//===================================================================================================================
//Nome:Heloisy Aparecida RA:82320268
let jogoFavorito = {
    nome: 'The Legend of Zelda',
    preco: 299.00,
    estoque: 15
};

// A. Como acessar o nome do objeto?
console.log("A) Nome do jogo:", jogoFavorito.nome);

// B. Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", jogoFavorito['preco']);

// C. Atualize o estoque para 80.
jogoFavorito.estoque = 80;

// D. Imprima todas as propriedades no console.
console.log("D) Objeto atualizado:", jogoFavorito);

//===================================================================================================================

//Nome:Lucas Melo RA:82327243
let roupaFavorita = {
    nome: 'Jaqueta de Couro',
    preco: 199.90,
    estoque: 15
};

// A. Como acessar o nome do objeto?
console.log("A) Nome da roupa:", roupaFavorita.nome);

// B. Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", roupaFavorita['preco']);

// C. Atualize o estoque para 80.
roupaFavorita.estoque = 80;

// D. Imprima todas as propriedades no console.
console.log("D) Objeto atualizado:", roupaFavorita);
