const x = 10

// checar se x é um número
// o throw para a execução
if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número!!')
}

// o try não para a execução
try {
    x = 3
} catch (error) {
    console.log(`ERRO: ${error}`);    
}

console.log('... continuação da execução!!')