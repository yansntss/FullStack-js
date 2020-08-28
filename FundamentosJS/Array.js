/**
 * Em js o array é um objeto
 * é um vetor
 * uma estrutura unidimencional
 * estrutura linear
 * forma de agrupar multiplos valores
 */

 const valores = [7.5, 4.5, 9.9, 5.6]
 console.log(valores)

 //acessar posição do array
 console.log(valores[0], valores[3])
 console.log(valores[4])

 //adicionar valor ao array
 valores[4] = 10
 console.log(valores)

 //verificar o tamanho do array
 console.log(valores.length)

 //adicionar novos elementos ao array
 valores.push({id: 3}, false, null, 'teste')
 console.log(valores)

 //remover o ultimo valor do array
 valores.pop()
 delete valores [0]
