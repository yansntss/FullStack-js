//recebe 3 parametros, nome, indice e array 

Array.prototype.forEach2 = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (name, indice) {
  console.log(`${indice + 1}) ${name}`);
});
