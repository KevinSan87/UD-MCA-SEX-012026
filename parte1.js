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