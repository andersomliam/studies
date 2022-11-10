/** 
 * Desafio - 3
 * 
 * Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
 * Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
 * O salário salário a ser transferido é calculado da seguinte maneira: 
 * 
 * - valor bruto do salário 
 * - percentual de imposto mediante a faixa salarial + adicional dos benefícios. 
 * 
 * - Para calcular o percentual de imposto segue as aliquotas:
 * 
 *  De R$ 0.00 a R$ 1100.00 = 5.00%
 *  De R$ 1100.01 a R$ 2500.00 = 10.00%
 *  Maior que R$ 2500.00 = 15.00%
 * 
 *  Exemplo:
 *    Entrada:
 *      2000
 *      250
 *    Saída:
 *      2050.00
*/

const { gets, print } = require('./functions');

const salario = gets();
const beneficio = gets();
let desconto = 0;
let salarioPagar = 0;
let valor = 0;
let percentual = 0;

/** Retorna o percentual que será usado no calculo do salário */
function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

/** Retorna o percentual que será usado no calculo do salário. */
function pegarAliquota(salario) {
    if (salario <= 1100) {
        return 5;
    } else if (salario > 1100 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

function calcularSalario() {
    return salario - valorImporto + beneficio;
}

const aliquotaImposto = pegarAliquota(salario); 
const valorImporto = calcularPorcentagem(salario, aliquotaImposto);


print('salario: ' + salario);
print('beneficio: ' + beneficio);
print('aliquotaImposto: ' + aliquotaImposto);
print('valorImporto: ' + valorImporto);
print('salarioPagar: ' + calcularSalario());


/* Minha resolução
if (salario <= 1100) {
  desconto = (salario * 5.0) / 100;
  salarioPagar = (salario - desconto) + beneficio;

} else if (salario > 1100 && salario <= 2500) {
  desconto = (salario * 10.0) / 100;
  salarioPagar = (salario - desconto) + beneficio;

} else {
  desconto = (salario * 15.0) / 100;
  salarioPagar = (salario - desconto) + beneficio;

} 

print('salario: ' + salario);
print('beneficio: ' + beneficio);
print('desconto: ' + desconto);
print('salario - desconto: ' + (salario - desconto));
print('salarioPagar: ' + salarioPagar); */