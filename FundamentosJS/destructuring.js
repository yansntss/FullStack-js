// novo recurso do es2015
const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua d',
        numero: 369
    }
}

/** {} logo apos o const representa um destructuring
 * serve para pegar valor em um objeto
 * 
 * dentro do couchete eu coloco os itens a ser retirado
 * depois eu digo de qual objeto eu quero tirar
 * 
 */
const {nome, idade} = pessoa
console.log(nome, idade) 

//tambem posso definir uma variavel dentro dos couchete

const {nome: n, idade: i} = pessoa
console.log(n,i)


//pegando um objeto dentro de um obejto  "cep n existe no objeto"
const { endereco: {logradouro, cep, numero}} = pessoa
console.log(numero,logradouro, cep)

console.log(pessoa)