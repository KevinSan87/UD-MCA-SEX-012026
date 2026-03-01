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