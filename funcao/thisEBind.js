//usando o this
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //Bom dia!
    }
}

//tentando pegar a função que está dentro do const pessoa
pessoa.falar()
const falar = pessoa.falar
falar() //undefined

//pegando a função "falar" da const "pessoa" através do bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Bom dia!