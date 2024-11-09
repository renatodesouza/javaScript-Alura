//Map é um metodo que executa uma funcao para cada elemento de um array

const notas = [10, 3, 6, 9, 4, 6]

const notasAtualizadas = notas.map((nota) =>{
    return nota + 1 >= 10 ? 10 : nota + 1;
})

const notasAtuais = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas)

console.log(notasAtuais)



