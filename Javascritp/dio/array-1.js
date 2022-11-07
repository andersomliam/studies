const alunos = [
    'Anderson',
    'Davi',
    'Patricia'
];


console.log(alunos);

/** Adicionar itens no array */
alunos.push('Linguiça');
alunos[4] = 'Mia';

console.log(alunos);

/** Apaga o ultimo item, mas tbm imprime */
//console.log('Exclui da ultima posição: ' + alunos.pop());
console.log('Exclui da primeira posição: ' + alunos.shift());

console.log(alunos);

console.log('Quantidade de item do array: ' + alunos.length);