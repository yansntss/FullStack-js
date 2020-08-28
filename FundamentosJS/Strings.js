const escola = "Cod3r"

// pegando o caracter do indice 4
console.log(escola.charAt(4))

// pegando o indice 3 e convertendo na tabela ascii/unicode
console.log(escola.charCodeAt(3))

// verificando se tem o valor solicitado no indice/ retorna a posição do indice
console.log(escola.indexOf('C'))

//vai retornar a partir do valor que tiver no parametro
console.log(escola.substring(1))

//vai retornar do indice 0 ate o indice 3 SEM incluir o indice 3 ("va do indice 0 e me de 3 caractere")
console.log(escola.substring(0, 3))


//concatena 
console.log('escola '.concat(escola).concat(' !'))

/*substitui o indice. pegue o indice na posição 3 e substitua por "e"
rejex: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
*/
console.log(escola.replace(3, 'e'))

//o split transforma em array usando como metodo de separação, o parametro que eu indicar]
//da pra usar expreção regular para por examplo separar por email
console.log('yan, pedro, maria'.split(','))