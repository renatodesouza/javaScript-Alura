let aluno = ['renato', 'souza', 'lucas']

let idade = [11, 34, 21, 12]

let novaLista = [aluno, idade]

console.log(novaLista)

//Acessando cada elemento dentro de uma lista

console.log(`o aluno ${novaLista[0][1]} tem ${novaLista[1][1]} anos` )


//Utilizando o metodo concat para unir dois arrays
// esse metodo na verdade concatena somente os elementos do array que ele recebeu como parametro
//e nao o array em si

let novoArray = aluno.concat(idade)

console.log(novoArray)

//exemplo dois passando strings para o metodo concat

let arrayStrings = aluno.concat('maria', 'lucia')

console.log(arrayStrings)

// passando arrays aninhados
// neste caso o concat o array que esta dentro de outro array como um unico elemento no caso [100, 200]
let array1 = [12, 24, 48]

let array2 = [96, [100, 200]]

let novoArray1 = array1.concat(array2)

console.log(novoArray1)



//O metodo includes verifica se um determinado item esta no array

const alunos = ['lucas', 'renato']
const idades = [12, 13]

const listaAlunos = [alunos, idades]

console.log(listaAlunos)

function exibeNomeEnota(aluno){
    if (listaAlunos[0].includes(aluno)){
        console.log(`O aluno ${aluno} esta na lista`);
    }else{
        console.log('Aluno nao encontrado')
    }
}

exibeNomeEnota('renato')