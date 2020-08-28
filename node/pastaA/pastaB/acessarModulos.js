//sempre respeitar as letrar maiúsculas e minúsculas pois esse a maioria dos servidores rodam em linux e caso estivesse "moduloa" ao invés de "moduloA", iria rodar no mec, no windows porem, ia dar pau no linux :)
const moduloA = require('../../moduloA')

//por padrao ele vai procurar o aquivo index.js dentro da pasta quando ela é adicionada no node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)