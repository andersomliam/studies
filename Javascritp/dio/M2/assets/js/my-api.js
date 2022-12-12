// const myPokeApi = {};

const urlParams = new URLSearchParams(window.location.search)

const pokemonId = urlParams.get("value")

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

const header = document.getElementById('header');
const tab = document.getElementById('tab');

let male = '0,0%'
let female = '0,0%'

function getGender(gender) {
  if (gender < 2) {
    male = '100%'
  } else if (gender >= 2 || gender < 4) {
    male = '87,5%'
    female = '12,5%'
  } else if (gender >= 4 || gender < 8) {
    male = '75%'
    female = '25%'
  } else if (gender >= 8 || gender < 12) {
    male = '50%'
    female = '50%'
  } else if (gender >= 12 || gender < 15) {
    male = '25%'
    female = '75%'
  } else {
    female = '100%'
  }

  return `<span><img width="14px" src="./assets/img/icon_male.png" alt="Male" /> ${male}</span> 
   <span><img width="14px" src="./assets/img/icon_female.png" alt="Female" /> ${female}</span>`
}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon

  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  pokemon.species = pokeDetail.species.name
  pokemon.height = pokeDetail.height
  pokemon.weight = parseInt(pokeDetail.height) / 10 
  pokemon.abilities = pokeDetail.abilities.map((nomeAtribuidoParaNovoArray) => nomeAtribuidoParaNovoArray.ability.name).join(' / ')

  pokemon.speciesUrl = pokeDetail.species.url

  return pokemon
}

getPokemonDetailSpecies = (url) => {

  return fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => {
      tab.innerHTML +=
        `
        <tr>
          <td class="tab-title">Breeding</td>
          <td></td>
        </tr>
        <tr>
          <td id="gender">gender:</td>
          <td class="color-detail">${getGender(jsonBody.gender_rate)}</td>
        </tr>
        <tr>
          <td>egg groups</td>
          <td class="color-detail">${jsonBody.egg_groups.map((egg_groups) => `<span>${egg_groups.name}</span>`).join(' / ')}</td>
        </tr>
        <tr>
          <td>egg cycle</td>
          <td class="color-detail">gress</td>
        </tr>
        `
    })
    .catch((error) => console.error(`ERROR (getPokemonDetailSpecies): ${error}`))

}

getPokemonDetail = (url) => {
  return fetch(url)
    .then((Response) => Response.json())
    .then(convertPokeApiDetailToPokemon)
    .then(pokemon => {

      header.innerHTML +=
        `
      <section class="title">
        <div id="title">
          <h1 id="name">${pokemon.name}</h1>
          
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}" >${type}</li>`).join('')}
          </ol>
        </div>
     
        <div id="id">
          <span>#${pokemon.number}</span>
        </div>
      </section>

      <picture class="image">
        <img src="${pokemon.photo}" alt="${pokemon.photo}" /> 
      </picture>
      `

      tab.innerHTML +=
        `
          <tr>
            <td>species:</td>
            <td class="color-detail">${pokemon.species}</td>
          </tr>
          <tr>
            <td>heigth:</td>
            <td class="color-detail">0.${pokemon.height} m</td>
          </tr>
          <tr>
            <td>weigth:</td>
            <td class="color-detail">${pokemon.weight} kg</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td class="color-detail">${pokemon.abilities}</td>
          </tr>
          
      `
      getPokemonDetailSpecies(pokemon.speciesUrl)
    })
    .catch((error) => console.error(`ERROR: ${error}`))
}

getPokemonDetail(url)