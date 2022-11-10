// O primeiro numero esta sendo usado para definir o tamanho do array
const entradas = [5,3,4,1,10,8];

let i=0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };