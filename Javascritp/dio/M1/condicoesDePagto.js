/**
 * Defina o valor do produto conforme a opção de pagamento.
 * 
 * Condições de pagamento:
 * 1 = À vista débito = 10% de desconto;
 * 2 = À vista dinheiro ou PIX, 15% de desconto;
 * 3 = Em 2x, preço normal, sem juros;
 * 4 = Acima de 2x, acréssimo de 10% de juros.
 */

function aplicarDesconto(valorProduto, percentualDesconto) {
    return valorProduto - ((valorProduto * percentualDesconto) / 100);
}

function aplicarJuros(valorProduto, percentualJuros) {
    return valorProduto + ((valorProduto * percentualJuros) / 100);
}

function calcular(produto, formaDePagto) {
    if (formaDePagto === 1) {
        return aplicarDesconto(produto, 10);

    } else if (formaDePagto === 2) {
        return aplicarDesconto(produto, 15);

    } else if (formaDePagto === 4) {
        return aplicarJuros(produto, 10);

    } else {
        return produto;

    }
}

function classificarFormaPacto(formaDePagto) {
    if (formaDePagto === 1) {
        return 'Forma de pagto: À vista débito';

    } else if (formaDePagto === 2) {
        return 'Forma de pagto: À vista dinheiro ou PIX';

    } else if (formaDePagto === 4) {
        return 'Forma de pagto: 10x com juros';

    } else {
        return 'Forma de pagto: 2x sem juros';

    }
}



(function () {
    const produto = 100;
    const formaDePagto = 4

    console.log('Valor Total R$ ' + classificarFormaPacto(formaDePagto));
    console.log('Valor do produto R$ ' + produto);
    console.log('Valor do desconto R$ ' + (produto - calcular(produto, formaDePagto)));
    console.log('Valor Total R$ ' + calcular(produto, formaDePagto));
})();