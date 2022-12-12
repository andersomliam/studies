const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual sua linguagem de programação preferida!? `, (language) => {

    if (language == 'PHP') {

        console.log('Isso nem é linguagem!! :-)');
        
    } else {
        console.log(`A minha liguagem preferia é: ${language}`);
        
    }
        readline.close()
    })