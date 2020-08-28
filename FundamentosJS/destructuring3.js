/**a funçao rand vai retorar um numero aleatorio
 * vou passar 2 atributos dentro do destructuiring (max e min)
 */
function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))

//vai do 456 ate 1000 ou seja, do min de 456 ate o max de 1000 q ta padrao
console.log(rand({ min: 456}))

//aqui ele pega o min e max padrao
console.log(rand({}))

// vai da erro pq é undefined
console.log(rand())

