const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3, 4, function (x, y){
    return x- y
})

//arrow padrao é uma função anonima
imprimirResultado(3, 4, (x,y) => x*y)

//função anonima dentro de um conceito de obj
const pessoa = {
    // falar: function(){}
    falar() {
        console.log('opa')
    }
}

pessoa.falar()