/**depois da palavra reservada eu uso o colchete
 * note que nao faz sentido ser a declaração de um array ja que uso o colchete depois da palavra reservada "const"
 * então, analize onde o colchete esta sendo colocado para ver se é um array ou um destructuring
 * 
 */

 
const [a] = [10]
console.log(a)

// seguindo a ordem/ pulando um indice/ indice que nao existe

const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


//array dentro de um array; pule o primeiro array, ignore o primeiro elemento do segundo array e me dê o segundo elemento do segundo array
const [,[,nota]] = [[, 8, 7], [9,6,0]]
console.log(nota)