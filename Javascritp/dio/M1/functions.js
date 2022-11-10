function sayYourName(name) {
    console.log('Your name is: ' + name);
}

sayYourName('Anderson Lima');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(1000, 10));
console.log(incrementarJuros(1000, 15));