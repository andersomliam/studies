/**
 * Formula do IMC
 * 
 * IMC = peso / (altura * altura);
 * 
 * IMC em adultos:
 * - Abaixo de 18.5     => Abaixo do peso;
 * - Entre 18.5 e 25    => Peso normal;
 * - Entre 25 e 30      => Acima do peso;
 * - Entre 30 e 40      => Obeso;
 * - Acima de 40        => Obesidade grave.
 */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'IMC: ' + imc.toFixed(1) + ' Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'IMC: ' + imc.toFixed(1) + ' Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'IMC: ' + imc.toFixed(1) + ' Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'IMC: ' + imc.toFixed(1) + ' Obeso';
    } else {
        return 'IMC: ' + imc.toFixed(1) + ' Obesidade grave';
    }
}

function main() {
    const peso = 79;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();

/** FUNÇAO IMEDIATAMENTE IVOCADA */
(function () {
    const peso = 79;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();