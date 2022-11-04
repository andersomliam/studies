/**
 * Calcule e imprima a média do aluno e a sua classificação.
 * 
 * Média = (nota1 + nota2 + nota3) / 3;
 * 
 * Classificação:
 * - Média menos que 5, reprovado;
 * - Mèdia entre 5 e 7, recuperação;
 * - Média acima de 7, Aprovado.
 */

let nota1 = 7.2;
let nota2 = 7;
let nota3 = 7;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Média ' + media.toFixed(1) + ' aluno REPROVADO!');
} else if (media >= 5 && media <= 7) {
    console.log('Média ' + media.toFixed(1) + ' aluno em RECUPERAÇÃO!');
} else {
    console.log('Média ' + media.toFixed(1) + ' aluno APROVADO!');
}