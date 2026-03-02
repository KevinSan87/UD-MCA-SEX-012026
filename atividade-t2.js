let listaTecnologias = [
"HTML","CSS","JavaScript","Python","Java",
"C#","PHP","React","Node.js","SQL",
"MongoDB","Git","Docker","Kubernetes","AWS",
"Azure","TypeScript","Bootstrap","Linux","Figma","Power BI"
];

console.log("Posição 0:", listaTecnologias[0]);
console.log("Posição 7:", listaTecnologias[7]);
console.log("Posição 11:", listaTecnologias[11]);
console.log("Posição 15:", listaTecnologias[15]);
console.log("Posição 18:", listaTecnologias[18]);
console.log("Posição 20:", listaTecnologias[20]);

console.log("Penúltimo:", listaTecnologias[listaTecnologias.length - 2]);
console.log("Último:", listaTecnologias[listaTecnologias.length - 1]);

console.log("Total:", listaTecnologias.length);

listaTecnologias.push("Inteligência Artificial");

for (let i = 0; i < listaTecnologias.length; i++) {
console.log(listaTecnologias[i]);
}
