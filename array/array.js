//array é um objeto e é organizado por índice começando do 0

let pessoas = ['yan','Gio' ]

//adicionar elementos
pessoas[2] = 'Giovana' 
pessoas.push('Bea')

//alterar ordem do array sem apagar o array original
pessoas.sort()
console.log(pessoas)

//deletar
delete pessoas[1]

//excluir/add elementos no array
pessoas.splice(1,2) //apagar todos a partir do índice 1

pessoas.splice(1,2, 'elemento1', 'elemento2') //apagar 2 índice a partir do índice 1 e adicionar 'elemento1' e 'elemento2'
