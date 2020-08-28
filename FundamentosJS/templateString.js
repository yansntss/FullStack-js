//lembrando aq pra nao criar nome de varial de forma idiota e de quebra os nomes das funções tbm rsrs.


const nome = 'Yan'

//uma forma de concatenar
const concatenacao = 'ola' + nome +'!!'

//forma de concatenar lançada em 2015 pela ecma

const template = `ola ${nome}!`

console.log(template)

//da pra melhorar? siiim. da pra usar função dentro do template

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('pega visao mofio')}!`)