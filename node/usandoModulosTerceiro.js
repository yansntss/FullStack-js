/**geralmente usasse o '_' para referenciar o lodash
 * Quando eu faço esse tipo de import, ele vai procura dentro da pasta node_modules a pasta lodash e dentro do lodash vai procurar o index.js.
 * o index.js vai ser responsável por chamar todos os arquivos do lodash 
 */

// import _ from 'lodash';
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)

/**nessa aula eu instalei e usei o nodemon para ficar executando o codigo mesmo se houver alteração
 * atravez do comando npm i -g nodemon (no terminal)
 * executando o nodemon NODEMON CAMINHO_DO_ARQUIVO
 */

