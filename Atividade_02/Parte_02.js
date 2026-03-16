//Nome: Gabriel Dias de Moraes Ferreira - 825157250

let doce = {
    nome: 'brigadeiro',
    cor: 'marrom',
    preco: '1,50',
    estoque: '50'
};

//A. Como acessar o nome do objeto?
console.log(doce.nome);

//B. Como acessar o preço usando colchetes?
console.log(doce['preco']);

//C. Atualize o estoque para 80.
doce.estoque = 80;

//D. Imprima todas as propriedades no console.
console.log(doce);