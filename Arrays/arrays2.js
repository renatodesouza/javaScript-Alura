const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const listaPar = []

const listaImpar = []


for (let i=0; i< lista1.length; i++){
    if(lista1[i] % 2 == 0){
        
        listaPar.push(lista1[i])
    }else{
        listaImpar.push(lista1[i])
    }
};

console.log('Numeros pares ' + listaPar);

console.log('Numeros impares ' + listaImpar);

