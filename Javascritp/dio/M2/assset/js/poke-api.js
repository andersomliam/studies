const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((Response) => Response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 170, limit = 30) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)

        .then((Response) => Response.json()) // A url retornou um response, que convertemos para json
        .then((jsonBody) => jsonBody.results) //De tudo que retorma pegamos só os resultados que são os pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Usamos a lista de pokemons para buscar atravez da url do pokemon os detalhes de cada pokemon. E convertemos os response para json.        .then((detailResquests) => Promise.all(detailResquests))
        .then((detailRequests) => Promise.all(detailRequests)) //Criando uma lista de promise com os detalhes dos pokemons
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}


