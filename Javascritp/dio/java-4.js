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

const peso = 75;
const altura = 1.75;
//const imc = peso / (altura * altura); Substituir pela biblioteca matemática;
const imc = peso / Math.pow(altura,2);

if (imc < 18.5) {
    console.log('IMC: ' + imc.toFixed(1) + ' Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('IMC: ' + imc.toFixed(1) + ' Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('IMC: ' + imc.toFixed(1) + ' Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('IMC: ' + imc.toFixed(1) + ' Obeso');   
} else {
    console.log('IMC: ' + imc.toFixed(1) + ' Obesidade grave');    
}