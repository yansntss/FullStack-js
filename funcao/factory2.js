function criarProduto(nome, preco){

    return{
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto('Notebook', 2199.41))
console.log(criarProduto('Xiaomi', 99.41))