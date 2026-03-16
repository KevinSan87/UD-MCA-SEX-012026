//Nome: Gabriel Dias de Moraes Ferreira - 825157250

let cobras =[ "Naja", "Mamba-negra", "Taipan-do-interior", "Jararaca", "Cascavel", "Surucucu-pico-de-jaca", "Coral-verdadeira",
  "Cobra-de-barriga-amarela", "Víbora-de-chifre", "Cobra-marrom", "Sucuri", "Píton-reticulada", "Jiboia", "Cobra-do-milho",
  "Falsa-coral", "Cobra-verde", "Cobra-cipó", "Cobra-rateira", "Píton-bola", "Cobra-de-vidro"
];

// PERGUNTAS

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// Naja, Cobra-de-barriga-amarela, Píton-reticulada, Cobra-verde, Píton-bola e na posição 20 não teria já que na lista só há 20 elementos e acaba na posição 19

// B. Qual elemento está na penúltima e última posição?
// Píton-bola, Cobra-de-vidro

// C. Quantos elementos existem no array?
// 20

// D. Adicione um novo elemento ao final do array.
cobras.push('Víbora')

// E. Imprima todos os elementos usando um for.
for (let i = 0; i < cobras.length; i++){
    console.log(cobras[i]);
}