const entradas = [11, 34, 78, 68, 41, 48, 68, 12, 89, 91, 99, 100, 111];

let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text) {
    console.log(text);
}

/** Exportando... */
module.exports = { gets, print };