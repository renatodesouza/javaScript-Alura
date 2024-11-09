const lista = [1, 2, 3, 4, 5, 6]

console.log(lista)

for(let i=0; i<lista.length; i++){
    console.log(lista[i])
}

//verificando numeros pares em um array

const listaPar = [];

for(let i=0; i<lista.length; i++){
    if (lista[i] % 2 === 0){
        listaPar.push(lista[i]);
    }
}

console.log(listaPar);



const alunos = ['renato', 'lucas', 'anderson']

const notas = [10, 5, 7]

const alunosNotas = [alunos, notas]

console.log(alunosNotas)

function encontraAluno(aluno) {
    
    if(alunosNotas[0].includes(aluno)){
        let indice = alunosNotas[0].indexOf(aluno)
        const [alunos, notas] = alunosNotas

        console.log('alterado ' + alunos)
        console.log('alterado ' + notas)

        console.log(`O aluno ${aluno} com a nota ${notas[indice]}`);
    };
}


encontraAluno('lucas')