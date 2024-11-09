const nota = [1,2,3,4,56, 34, 67, 9, 79]

console.log(nota[2])

//Adicionando itens ao array com push

nota.push(10)

//removendo itens com pop, ele remove o
//ultimo elemento 
nota.pop()

nota.pop()


//adicionando um ou mais elementos no inicio do array
// unshift

nota.unshift(123, 12)

//remove o primeiro elemento do array 
//e retorna o elemento removido

nota.shift()

//concat combina dois ou mais arrays

const media = [2, 34, 57, 11]

let novoArray = nota.concat(media)

console.log(nota)

console.log(novoArray)


//slice retorna um parte do array com base nos indices passados

let novaNota = nota.slice(2, 5)
console.log(nota)
console.log(novaNota)

//forEach executa uma função para cada elemento do array

nota.forEach(function(elemento){
    console.log(elemento)
})