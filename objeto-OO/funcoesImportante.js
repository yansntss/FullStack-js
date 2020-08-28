const pessoa = {
    nome: 'yan',
    idade: 20,
    peso: 70
}

console.log(Object.keys(pessoa)) //chave
console.log(Object.values(pessoa)) //valor
console.log(Object.entries(pessoa)) //chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//propriedade que nao pode ser alterada, funciona como um freeze
Object.defineProperty(pessoa, 'dataNascimento', {
   //caracteristicas
    enumerable: true, //vai ser listado?
    writable: false, //pode ser alterado?
    value: '01/01/2020' //valor fixo
})

