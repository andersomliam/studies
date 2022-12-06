const myPokeApi = {};

const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`

myPokeApi.getPokemos = () => {
  return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => jsonBody.results)
    .then((arrayPokemonsList) => arrayPokemonsList[6])
    .catch((error) => console.error(error))
}

// console.log(myPokeApi.getPokemos());
const title = document.getElementById('title');

fetch(url)
  .then((Response) => Response.json())
  .then((jsonBody) => jsonBody.results)
  .then((arrayPokemonsList) => arrayPokemonsList[6])
  .then((pokemon) => {
    title.innerHTML += `<h1 id="name">${pokemon.name}</h1>`
  })
  .catch((error) => console.error(error))