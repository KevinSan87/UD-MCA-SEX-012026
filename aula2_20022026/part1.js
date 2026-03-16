let frutas = [
'Maçã','Banana','Laranja','Uva','Pera','Manga','Abacaxi','Melancia',
'Morango','Kiwi','Cereja','Limão','Coco','Mamão','Acerola','Goiaba',
'Caqui','Pitanga','Framboesa','Amora','Maracujá'
];

console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);


console.log("Penúltima:", frutas[frutas.length - 2]);
console.log("Última:", frutas[frutas.length - 1]);


console.log("Total de elementos:", frutas.length);

frutas.push("Graviola");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
