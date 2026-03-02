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
