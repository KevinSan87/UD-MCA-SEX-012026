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