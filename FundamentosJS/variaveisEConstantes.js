var a = 3
let b = 4

//o que acontece se eu executar?
var a = 30

//let b = 40

/**o var vai sobrescrever
 * o let vai dar um erro avisando que o "let b" ja esta definido
 * ou seja: com o let eu nao posso definir a mesma variavel mais de 1 vez esperando que atribua um valor a ela.
 * devo fazer da seguinte forma:
 */

 //agora eu to atribuindo valor ao let b
 b = 400 

 console.log(b, a)

 //ou seja SEMPRE USE O let NO LUGAR DO var

 const c = 5
 c=5

 /**o const ja é diferente
  * o const ele é uma constante ou seja, o valor dele nao pode ser alterado. Usa-se o const quando voce souber que aquela variavel nao vai precisar tem outro valor.
  * 
  * ou seja -> o valor vai ser CONSTante.
  * quanto mais const eu usar, melhor.
  */