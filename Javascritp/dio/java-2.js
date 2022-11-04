/**
 * AULA - 2 (Condicionais)
 * 
 * Calcular o valor gasto de combustivel em uma viagem.
 * 
 * 3 váriaveis:
 * 1 - Preço do gasolina;
 * 1 - Preço do etanól;
 * 3 - Tipo do combustível
 * 2 - Gasto médio de combustível;
 * 3 - Distância em KM da viagem;
 * 
 * Imprimir no console o valor para realizar a viagem.
 */

/** ENTRADAS */
const precoGasolina = 4.98
const percoEtanol = 3.39
const kmLitroGasolina = 13
const kmLitroEtanol = 10
const distanciaKm = 700

const combustivelEscolhido = percoEtanol / precoGasolina;

if (combustivelEscolhido > 0.7)  {
    const litrosConsumidos = distanciaKm / kmLitroGasolina
    const valorGasto = litrosConsumidos * precoGasolina;

    console.log('O custo da Gasolina para a viagem será de: R$ ' + valorGasto.toFixed(2));
    console.log('combustivelEscolhido: ' + combustivelEscolhido.toFixed(2));
    console.log('litrosConsumidos: ' + litrosConsumidos.toFixed(2));
} else {
    const litrosConsumidos = distanciaKm / kmLitroEtanol;
    const valorGasto = litrosConsumidos * percoEtanol;

    console.log('O custo do etanól para a viagem será de: R$ ' + valorGasto.toFixed(2));
    console.log('combustivelEscolhido: ' + combustivelEscolhido.toFixed(2));
    console.log('litrosConsumidos: ' + litrosConsumidos.toFixed(2));
}


