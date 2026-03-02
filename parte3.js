let produtos = [
  { nome: 'notebook', preco: 1500, estoque: 15 },
  { nome: 'mouse', preco: 50, estoque: 120 },
  { nome: 'teclado', preco: 120, estoque: 80 },
  { nome: 'monitor', preco: 900, estoque: 25 },
  { nome: 'impressora', preco: 650, estoque: 18 },
  { nome: 'cadeira gamer', preco: 1100, estoque: 12 },
  { nome: 'mesa escritório', preco: 750, estoque: 10 },
  { nome: 'headset', preco: 200, estoque: 60 },
  { nome: 'webcam', preco: 180, estoque: 40 },
  { nome: 'HD externo', preco: 400, estoque: 30 },
  { nome: 'pen drive 64GB', preco: 70, estoque: 150 }
];

// A. Qual é o preço do segundo objeto?
//  produtos[1].preco -->  50

// B. Qual é o nome do terceiro objeto?
//  produtos[2].nome --> teclado 

// C. Quantos itens existem no array?
// produtos.length() --> 11

// D. Imprima o nome de todos os objetos.
for(let i = 0 ; i <= produtos.length ; i++){
    console.log(produtos[i].nome);
}
// E. Some o total de estoque de todos os objetos.

let totalEstoque = 0
for(let i = 0 ; i <= produtos.length ; i++){
    totalEstoque += produtos[i].estoque;
}

// F. Qual objeto possui maior estoque?
// pen drive 64GB