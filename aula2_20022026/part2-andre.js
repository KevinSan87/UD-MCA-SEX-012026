//PARTE 2 (OBJETO) -  André Castanheda

let nomeObjeto = {
    nome: "Iphone",
    cor: "Laranja",
    preco: 11500,
    estoque: 40
};

// A) Como acessar o nome do objeto?

console.log("Nome do produto:", nomeObjeto.nome);

// B) Como acessar o preço usando colchetes?

console.log("Preço do produto:", nomeObjeto["preco"]);

// C) Atualize o estoque para 80

nomeObjeto.estoque = 80;

console.log("Estoque atualizado:", nomeObjeto.estoque);

// D) Imprima todas as propriedades no console

for (let propriedade in nomeObjeto) {
    console.log(propriedade + ":", nomeObjeto[propriedade]);
}
