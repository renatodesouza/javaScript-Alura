const  turmaA = [10, 9, 7, 8, 9, 10, 7]
const  turmaB = [10, 9, 10, 8, 4, 7, 3]


function somaMedias(notasTurma){
    const somaNotas = notasTurma.reduce((acc, nota) =>{
        return acc + nota;
    }, 0);

    const media = somaNotas / notasTurma.length;
    return media;
}

console.log(somaMedias(turmaA))

//Juntar todos os elementos de um array de strings em uma strngi

const palavra = ['renato', 'de', 'souza', 'lucas']

const novaString = palavra.reduce((acc, palavra)=> {
    return acc + palavra
}, 0)

console.log(novaString)