// par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //  contexto léxico 2
    return saudacao // vai procurar primeiro no contexto local, depois vai subindo ate encontrar
}

// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'yan',
    idade: 19,
    peso: 90,
    endereço: {
        logradouro: 'Rua La De Baixo',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)