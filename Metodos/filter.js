const alunos = ['renato', 'lucas', 'joao', 'savio']

const medias = [10, 8, 9, 4]

const aprovados = alunos.filter((aluno, indice)=>{
    
    return medias[indice] >= 7;
})

console.log(aprovados)