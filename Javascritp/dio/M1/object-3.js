/**
 * Crie uma class para representar pessoas.
 * - Para cada pessoa teremos os atributos:
 *      - nome;
 *      - peso;
 *      - altura;
 * - Crie um método para calcular o IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        return this.peso / Math.pow(this.altura,2);
    }

    classificarIMC () {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';   
        } else {
            return 'Obesidade grave';
        }
    }
}
/*
const anderson = new Pessoa('Anderson', 80, 1.75);
anderson.imc = anderson.calcularIMC().toFixed(1);
anderson.classificacao = anderson.classificarIMC();

const davi = new Pessoa('Davi', 26, 1.21);
davi.imc = davi.calcularIMC().toFixed(1);
davi.classificacao = davi.classificarIMC();

console.log(anderson, davi); */
const anderson = new Pessoa('anderson', 80, 1.75).calcularIMC();
console.log();