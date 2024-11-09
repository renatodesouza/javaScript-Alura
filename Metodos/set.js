//Conjuntos set
//Utilizando conjuntos set
// para remover itens iguais dentro de um array

const array = [1, 2, 3, 4, 5, 6, 7,7, 4, 3, 2]

//Removendo itens duplicados do array com set
const conjunto = new Set(array);

//Crio um novo array sem os itens repetidos
const novoArray = [...conjunto];

//Outra forma de remver os itens repetidos do array 
//com conjuntos set
const conjuntos2 = [...new Set(array)];



console.log(conjunto);

console.log(conjuntos2);

console.log(novoArray);