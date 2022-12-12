const fs = require('fs')

console.log('Início');

fs.writeFileSync('Sync.txt', 'Teste Sync e Async!')

console.log('Fim');