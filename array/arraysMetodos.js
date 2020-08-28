const pilotos = ['vettel', 'alonso','raikkonen','massa']

//tirar o ultimo elemento da lista
pilotos.pop()
console.log(pilotos)

//adicionar elemento na ultima posição
pilotos.push('Massa')
console.log(pilotos)

// remover o primeiro elemento
pilotos.shift()
console.log(pilotos)

// adiciona um elemento na primeira posição de um array
pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Filipe')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//Gerar um novo array/pegar uma parte do array

//pegar a partir do índice 2
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//pegar do indice 1 ate o indice 4 (1, 2, 3)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)