// imprimir mais de um valor
const x = 07
const y = "Anderson"
const z = [20,30,50]

console.log(x, y, z)

// contagem de impressão
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
console.log('O nome dele é: %s, ele é programador', y)

setTimeout(() => {
    console.clear()
}, 3000)
