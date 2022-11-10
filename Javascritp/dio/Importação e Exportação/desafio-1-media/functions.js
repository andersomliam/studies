const entrada = [-5.5];

let i = 0;

function gets() {
    const valor = entrada[i];
    i++;
    return valor;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };