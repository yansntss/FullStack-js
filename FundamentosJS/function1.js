/**Tudo em JS é function.
 * um objeto é uma function
 * um array é uma function
 * uma class é uma function
 * quase tudooo msm
 * --------------------------
 * função é um bloco de codigo nomeado 
 * recebe parametros de entrada e retorna um valor
 * uma funçao pode:
 *  receber nenhum parametro;
 *  não retornar dados;
 *  pode receber dados de entrada;
 *  VARIAS POSSIBILIDADES DIFERENTES
 */

 //Fução sem retorno
 function imprimirSoma(a, b){
    console.log(a + b)
 }
 //2 = a // 8 = b
 imprimirSoma(2,8)
 
 //2=a // 8=b e os demais sao ignorados
 imprimirSoma(2, 8, 5, 6)

 //2 = a e o b = undefined //gerando um NaN
 imprimirSoma(2)

//-------------------------------------------------------------------

//Função com Retorno

//definindo um valor padrao para b
function soma(a, b=5){
    return a +b
}

console.log(soma(1,8))

// funçao anonima
const soma = function (a, b){

}
soma(2, 9)