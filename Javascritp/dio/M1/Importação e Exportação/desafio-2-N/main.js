/**
 * Dasafio - 1
 * 
 * Um programa que receba N (qtde de numeros) 
 * e seus respectivos valores.
 * Imprima o maior numero par e o menor numero impar.
 * 
 *      Exemplo:
 *          Entrada: 5,3,4,1,10,8
 *          Saida: Maior numero par: 10
 *                 Menor numero impar: 1
 */
 const { gets, print } = require('./functions');

/** Minha Soluçao 
 * =============================
let numero =    [];
let par = [];
let impar = [];
let numeroMaiorPar = 0;


// Populando... 
for (let i = 0; i < 6; i++) {

    numero.push(gets());

    // Se par 
    if ((numero[i] % 2) === 0) {
        par.push(numero[i]);
    } else {
        impar.push(numero[i]);
    }
    
}

let numeroMenorImpar = impar[0];

for (let i = 0; i < numero.length; i++) {

    if (numeroMaiorPar < par[i]) {
        numeroMaiorPar = par[i];
    }

    if (impar[i] < numeroMenorImpar) {
        numeroMenorImpar = impar[i];
    }
    
}
*/

// Entrada: 5,3,4,1,10,8
const n = gets();

let numeroMaiorPar = 0;
let numeroMenorImpar = 0;

for (let i = 0; i < n; i++) {

    const numero = gets();

    // se par
    if (numero % 2 === 0) {
        if (numeroMaiorPar < numero) {
            numeroMaiorPar = numero;
        }
    } else {

        // se nunca check o primeiro numero impar
        if(numeroMenorImpar === 0){
            numeroMenorImpar = numero;
        } else if (numero < numeroMenorImpar) {
            numeroMenorImpar = numero;
        }
    }


    
}

print(numeroMaiorPar);
print(numeroMenorImpar);