//Nome: Kevin de Santana Carvalho
let lista = [
    "Maçã", "Banana", "Laranja", "Uva", "Pera",
    "Abacaxi", "Manga", "Morango", "Kiwi", "Limão",
    "Melancia", "Cereja", "Ameixa", "Goiaba", "Mamão",
    "Maracujá", "Figo", "Caju", "Jabuticaba", "Graviola",
    "Pitaya"
];

// A
console.log("A) Qual elemento está na posição 0?");
console.log(lista[0]);

console.log("Qual elemento está na posição 7?");
console.log(lista[7]);

console.log("Qual elemento está na posição 11?");
console.log(lista[11]);

console.log("Qual elemento está na posição 15?");
console.log(lista[15]);

console.log("Qual elemento está na posição 18?");
console.log(lista[18]);

console.log("Qual elemento está na posição 20?");
console.log(lista[20]);

// B
console.log("B) Qual elemento está na penúltima posição?");
console.log(lista[lista.length - 2]);

console.log("Qual elemento está na última posição?");
console.log(lista[lista.length - 1]);

// C
console.log("C) Quantos elementos existem no array?");
console.log(lista.length);

// D
console.log("D) Adicionando novo elemento ao final...");
lista.push("Carambola");
console.log(lista);

// E
console.log("E) Imprimindo todos os elementos:");
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}


//Nome: Gustavo de Cassio Gomes Perez - 823116201
let arrayDeNomes=['Gustavo','Arthur', 'Beatriz', 'Caio', 'Diana', 'Eduardo', 'Fernanda', 'Gabriel', 
                    'Helena', 'Ícaro', 'Júlia', 'Kevin', 'Larissa', 'Miguel', 'Natália', 'Otávio', 'Patrícia', 
                    'Quirino', 'Renata', 'Samuel', 'Tatiana'];

//A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
//Gustavo, Gabriel, Kevin, Otavio, Renata, Tatiana

//B. Qual elemento está na penúltima e última posição?
// Samuel e Tatiana 

//C. Quantos elementos existem no array?
//21

//D. Adicione um novo elemento ao final do array.
arrayDeNomes.push('Victor')

//E. Imprima todos os elementos usando um for.
for (let i = 0; i < arrayDeNomes.length; i++){
    console.log(arrayDeNomes[i]);
}