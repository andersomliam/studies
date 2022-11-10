/**
 * Crie um programa que dado um número,
 * imprima a sua tabuada.
 */

const number = 6;
const tab = [];

/**Populando o array */
for (let i = 1; i <= 10; i++) {
    tab.push(i);
}

for (let i = 0; i < tab.length; i++) {
    //console.log(tab[i] + 'x' + number + '=' + number*tab[i]);
}

const listNumbers = [];
const numbers = [];

/**Populando o array */
for (let i = 0; i <= 22; i++) {
    listNumbers.push(i);
}

for (let i = 0; i < listNumbers.length; i++) {    
    if ((i % 2) === 0) {
        numbers.push(i);
    }
}
//console.log(numbers);

const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);