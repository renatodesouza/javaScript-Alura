const nomes = ['renato', 'lucas', 'souza'];

function maiusculas(nome){
    const novoNome = nome.toUpperCase()
    return novoNome;
}

const minhaFuncao = nomes.map((maiusculas));

console.log('Minha funcao ' + minhaFuncao)

//Utilizando o map para retornar os nomes com iniciais 
//maiusculas
const nomesPadronizados = nomes.map((nome) =>{
    return nome.toUpperCase();
})

const nomesPadronizadosDois = nomes.map((nome) => nome.toUpperCase())

console.log(nomesPadronizadosDois)

console.log(nomesPadronizados)