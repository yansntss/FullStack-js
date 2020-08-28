console.log(7/0)

//nesse caso ele divide o 10 por 2 pq pra ele faz sentido ser uma operação arit
console.log("10" /2)

//nesse caso ele concatena pq para a logica dele nao faz sentido ser uma operação arit
console.log("10" + 2)

console.log("show"*2)//NaN -> not a number
console.log(0.1 + 0.7)// nao tem uma precisão de 100% pq da lentidao que seria no resultado, entao é normal ter algumas inprecisoes com o float(iEEE EcmaScript)

//console.log(10.toFixed()) nao pod eaplicar diretamente no numero

console.log((10.345).toFixed(2))