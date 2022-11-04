/**
 * Defina o valor do produto conforme a opção de pagamento.
 * 
 * Condições de pagamento:
 * 1 = À vista débito = 10% de desconto;
 * 2 = À vista dinheiro ou PIX, 15% de desconto;
 * 3 = Em 2x, preço normal, sem juros;
 * 4 = Acima de 2x, acréssimo de 10% de juros.
 */


const produto = 100;
const formaDePagto = 3
const parcelado = 10;


//produto = produto - ((produto * 40)/100)


if (formaDePagto === 1) {
    console.log('Forma de pagto: À vista débito');
    console.log('Valor do produto R$ ' + produto);

    let desconto = ((produto * 10) / 100);
    let valor = produto - desconto;

    console.log('Valor do desconto R$ ' + desconto);
    console.log('Valor Total R$ ' + valor);

} else if (formaDePagto === 2) {
    console.log('Forma de pagto: À vista dinheiro ou PIX');
    console.log('Valor do produto R$ ' + produto);

    let desconto = ((produto * 15) / 100);
    let valor = produto - desconto;

    console.log('Valor do desconto R$ ' + desconto);
    console.log('Valor Total R$ ' + valor); 

} else if (formaDePagto === 4) {
    console.log('Forma de pagto: 10x com juros');
    console.log('Valor do produto R$ ' + produto);

    let juros = ((produto * 10) / 100);
    let valor = produto + juros;

    console.log('Valor do juros R$ ' + juros);
    console.log('Valor Total R$ ' + valor);

} else {
    console.log('Forma de pagto: 2x sem juros');
    console.log('Valor Total R$ ' + produto);

}
