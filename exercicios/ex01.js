/** Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores */

function operacao(a, b){
    soma = a+ b
    subtracao = a - b
    divisao = a / b
    multiplicacao = a * b

    resultado = { soma, subtracao, divisao, multiplicacao}

    

    return resultado
}

console.log(operacao(2,2))