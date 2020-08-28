/**para o meu cérebro fixar
 * 
 *Não use comentarios idiotas para explicar codigos.
 *Não nomeie funções/variaveis ou qualquer coisa com nomes idiotas ou muito generico. sempre nomeie com nomes que deem sentido ao projeto
 */



 const peso1 = 1.0
 const peso2 = Number('2.0')
 console.log(peso1, peso2)
 //verificar se o numero é um inteiro
 console.log(Number.isInteger(peso2))

 const avaliacao1 = 9.844
 const avaliacao2 = 7.844

 const total = avaliacao1 * peso1 + avaliacao2 *peso2
 const media = total / (peso1 + peso2)

 //toFixed serve para delimitar as casa decimais, ele nao altera o valor de media. ele pega o valor que ta na const media e aplica a função trazendo um novo resultado.
 console.log(media.toFixed(2))
 //converte em string. para converter em binario eu coloco o numero 2 no parametro 
 console.log(media.toString(2))
 console.log(typeof Number)