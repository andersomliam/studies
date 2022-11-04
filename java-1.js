

/**
 * AULA - 1
 * 
 * Calcular o valor gasto de combustivel em uma viagem.
 * 
 * 3 váriaveis:
 * 1 - Preço do combustível;
 * 2 - Gasto médio de combustível;
 * 3 - Distância em KM da viagem;
 * 
 * Imprimir no console o valor para realizar a viagem.
 */

/** ENTRADAS */
const precoGasolina = 4.89;
const kmPorLitro = 13;
const DistanciaKm = 700;

const litrosConsumidos = DistanciaKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoGasolina;

console.log('Gasto de combustivel em uma viagem: r$ ' + valorGasto.toFixed(2));