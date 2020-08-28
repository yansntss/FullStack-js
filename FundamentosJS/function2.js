// Armazenando Função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando em uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(1,2))


//retorno implicito

//quando nao coloco a chave significa que eu vou ter uma função com apenar uma unica linha / so vai executar uma sentença de codigo
const subtracao = (a, b) => a - b
console.log(subtracao(8,5))