//Criando uma copia do array sem alterar o original
const notas = [10, 2, 5, 8, 9];

const notasNovas = [...notas]

notasNovas.push(10);

console.log(`As novas notas sao ${notasNovas}`)

console.log(`As notas originais sao ${notas}`)


//OBS fazer uma nova atribuicao do array a outra variavel faz com que o js 
// aponte para o mesmo endereço de memoria da primeira variavel
//notas = [1, 2, 3]
//notas2 = notas
//Por isso qualquer alteracao na variavel notas2 ira tambem refletir na variavel notas, isso funciona somente com arrays

//Com os tipos primitivos do js o comportamento e diferente, ao atribuir uma variavel a outro 
// é criado um novo valor em um endereco de memoria

let num1 = 10;
let num2 = num1;

num2 += 5
num1 += 10

console.log(`O valor da variavel num1 é ${num1} e da variavel num2 é ${num2}`)

//O mesmo comportamento ocorre com parametros de funcoes

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

//Caso seja passado um array como parametro para uma funcao, 
//ele ira apontar para o mesmo endereco de memoria
const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
    
    array.push(10);

    console.log(`array do parâmetro é ${array}`);
    console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);

//--------------------------------------------------------------
//outra abordagem para corrigir o erro
const arrayOriginal2 = [7, 7, 8, 9];

function alteraArray2(array) {
    array = [...arrayOriginal2]
    array.push(10);

    console.log(`array do parâmetro é ${array}`);
    console.log(`arrayOriginal é ${arrayOriginal2}`);
}

alteraArray2(arrayOriginal2);