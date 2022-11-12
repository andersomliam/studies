/**
 * Enviando a requisição e como ela é assíncrona, ela retorna uma promessa de resposta, 
 * checamos o retorno com o response.
 * 
 * CÓDIGO MUTIO GRANDE!
 *  Para resolver isso usa-se
 *  ARROW FUNCTION
 *  Então substitui o código abaixo por:
 */
/* fetch(url)
    .then(function (response) {
        // console.log(response);

        // * Convertendo o responseBody e .json 
        // * mas ficou um .then() detro do outro.
        // * Para evitar isso....
        // response.json().then(function (responseBody) {
        //     console.log(responseBody);            
        // })
        return response.json()
    })
    .then(function (jsonBody){
        console.log(jsonBody);
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
 */

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}" >${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>    
    `
}

const pokemonList = document.getElementById('pokemonsList')
// pokemonList.innerHTML += '<li>Anderson teste</li>'

/** REFATORADO O CÓDIGO USANDO A FUNÇÃO MAP
 * para polupar o array antes de renderizar o HTML
 *  
pokeApi.getPokemons().then((pokemons) => {
        //ele para o a exercução do código lá no devtools do browser.
        //debugger
        // console.log(pokemonList)

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            // console.log(convertPokemonToLi(pokemon));
            pokemonList.innerHTML += convertPokemonToLi(pokemon) 
        }
    })*/

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})