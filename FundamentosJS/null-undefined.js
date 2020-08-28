// **atribuição por referência** 

//definindo um objeto na const a
const a = {name: 'teste'}

//a const b ta pegando o msm endereço de memoria da const a. logo se eu alterar a const b, a const a tambem altera
const b = a

b.name = "mude!"


/**tipos primitivos
 * com tipos primitivos ele a variavel faz uma copia do valor 
 */

 let valor //Não inicializada
 console.log(valor)

 //ausência de valor/ nao aponta pra nenhum obj da memoria
 let valor2 = null