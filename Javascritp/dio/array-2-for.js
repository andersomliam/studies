const nome = 'Anderson Martins de Lima';

for (let i = 0; i < nome.length; i++) {
    //console.log(nome[i]);
}

/**Caçlcular média */

const notas = [];

notas.push(8);
notas.push(3);
notas.push(6);
notas.push(5);
notas.push(8);
notas.push(7);
notas.push(7.5);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    //const nota = notas[i];
    soma = soma + notas[i];
    //console.log(soma);
    
}
console.log(soma / notas.length);

