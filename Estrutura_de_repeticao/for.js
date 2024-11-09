for(let i=0; i<10; i++){
    console.log(i)
}

console.log('-------------------------------')

for (let i=10; i>0; i--){
    console.log(i)
}

const lista = ['renato', 'lucas', 'souza']

for(nome of lista){
    console.log(nome)
}

//forEach utilizando funcao de callback

const notas = [10, 9, 8, 3, 7, 6]

notas.forEach(function(nota){
    console.log(nota);
});

//arrows functions

notas.forEach((nota) =>{
    console.log(nota);
})

//funcoes callbacks de forma externa

function imprime(valor){
    console.log(valor);
}

notas.forEach(imprime);