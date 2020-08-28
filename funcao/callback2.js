const notas = [9.8,8.7,8.8,7.7,5.4, 6.5, 3.5, 3.6, 4.6]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas [i]< 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback 
const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)

//callback com arrow
const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3)