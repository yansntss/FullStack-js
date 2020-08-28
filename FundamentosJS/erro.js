function tratarErroELancar(erro) {
    throw 'não pode ser'
}

function imprimirNomeGritado(obj){
    

    try {
        console.log(obj.name.toUpperCase() + '!!!')
        
    } catch (error) {
        tratarErroELancar(error)
        
    }


}

const obj ={noma: 'alecrin'}
imprimirNomeGritado(obj)