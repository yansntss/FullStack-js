// coleção dinâmica de pares chaves/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 23423,
    proprietario: {
        nome: 'Yan',
        idade: '15',
        endereco: {
            logradouro: 'Rua nova',
            numero: ' 157'
        }
    },
    //objeto dentro de um array
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {

        nome: 'renas',
        idade: 14
    }]
}