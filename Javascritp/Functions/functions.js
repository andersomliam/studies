// Método map()
// Recebe um array de entrade e processa segundo a função dada 
// e devolve um array com os repectivos resultados.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = num.map(tabuada = (n) => { return n = n * 7 })

console.log(result)

// ARROW FUNCTION ===========
console.log('...::: ARROW FUNCTION :::...')

// NORMAL
function dobro(n) {
    return n = n * 2
}
console.log('Usando função normal: ' + dobro(3))

// ANONIMA - Tem que armazenar numa variável
const dobroAnonimo = function (n) { return n = n * 2 }
console.log('Usando função anonima: ' + dobroAnonimo(3))

// ARROW FUNCTION - Recebo um parametro e envio para o calculo
const dobroArrowFunction = (n) => { return n = n * 2 }
console.log('Usando ArrowFunction: ' + dobroAnonimo(3))
