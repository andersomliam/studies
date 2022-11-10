/**
 * Dasafio - 1
 * 
 * Faça um programa que receba a média de um aluno.
 * Classifique média < 5: 'Reprovado'
 *             média >= 5 e < 7: 'Recuperação'
 *             média >= 7: 'Aprovado'
 * 
 *      Exemplo:
 *          In:
 *           5.5
 *         Out:
 *           Recuperação
 */

 const { gets, print } = require('./functions');

 const media = gets();

if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if (media > 7) {
    print('Aprovado');
} else {
    print('Numero Invalido!!')
}
