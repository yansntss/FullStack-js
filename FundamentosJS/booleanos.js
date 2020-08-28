let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//qualquer numero inteiro com a exeção do 0 é true
isAtivo = 1
console.log(!!isAtivo)
isAtivo = -1
console.log(!!isAtivo)
isAtivo = 322
console.log(!!isAtivo)

//valor padrao do 0 é false
isAtivo = 0
console.log(!!isAtivo)

//valores verdadeiros

console.log(!!' ')
console.log(!!'salve')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//falses

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


//retorna o primeiro valor verdadeiro
console.log(!!('' || null || 0 || ' '))

//exemplo

let nome = ""
console.log(nome || 'desconhecido')
