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