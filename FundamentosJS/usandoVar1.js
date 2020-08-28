//var é global ou seja ela pode ser chamada dentro ou fora do escopo QUADNO NAO ESTÁ ASSOCIADO A UMA FUNÇÃO

{
    {
        {
            var sera = 'sera??'
            console.log(sera)
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)