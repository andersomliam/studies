/**
 * 1 - Crie uma class para representar carros.
 * 
 * Os carros possuem uma marca, uma cor e um gasto médio de 
 * combustível por kilometro rodado.
 * 
 * Crie um método que dado a quantidade de quilometros e o preço
 * do combustível nos de o valor gasto em reais para realizar este
 * percurso.
 * 
 * Meu carro por exemplo:
 * Ford Fiesta 2008 1.0
 * Abastecido com 100% de álcool, 
 *      9,8 km/l na estrada e 
 *      8 km/l na cidade.
 * Abastecido com gasolina, 
 *      15,9 km/l e 12 km/l
 */

class Carro {
    /**Nome do carro */
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = 1 / gastoMedioKm;
    }

    calcularCusto (distanciaKm, preco) {
        return (distanciaKm * this.gastoMedioKm) * preco;
    }
}

const carro = new Carro('Fiest', 'Preto', 12);

carro.custoDaViajem = carro.calcularCusto(20,4.98);

console.log(carro);