const entrada = [5.5];

let i = 0;

function gets(entrada) {
    const valor = entrada[i];
    i++;
    return entrada;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };