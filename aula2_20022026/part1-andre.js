// PARTE 1 - ARRAY SIMPLES

let listaTecnologias = [
"HTML","CSS","JavaScript","Python","Java",
"C#","PHP","React","Node.js","SQL",
"MongoDB","Git","Docker","Kubernetes","AWS",
"Azure","TypeScript","Bootstrap","Linux","Figma","Power BI"
];

// A) Qual elemento está nas posições 0, 7, 11, 15, 18 e 20?

console.log("Posição 0:", listaTecnologias[0]);
console.log("Posição 7:", listaTecnologias[7]);
console.log("Posição 11:", listaTecnologias[11]);
console.log("Posição 15:", listaTecnologias[15]);
console.log("Posição 18:", listaTecnologias[18]);
console.log("Posição 20:", listaTecnologias[20]);

// B) Qual elemento está na penúltima e última posição?

console.log("Penúltimo elemento:", listaTecnologias[listaTecnologias.length - 2]);
console.log("Último elemento:", listaTecnologias[listaTecnologias.length - 1]);

// C) Quantos elementos existem no array?

console.log("Quantidade total de elementos:", listaTecnologias.length);

// D) Adicione um novo elemento ao final do array

listaTecnologias.push("Inteligência Artificial");

console.log("Novo tamanho após adicionar elemento:", listaTecnologias.length);

// E) Imprimir todos os elementos usando for

for (let i = 0; i < listaTecnologias.length; i++) {
console.log("Elemento na posição", i, ":", listaTecnologias[i]);
}
