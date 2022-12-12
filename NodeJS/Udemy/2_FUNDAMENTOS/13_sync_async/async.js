const fs = require('fs')

console.log('Início');

fs.writeFile('Async.txt', 'Teste Sync e Async!', function (err) {
    setTimeout(function(){
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim');