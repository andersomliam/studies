import styles from '../styles/Home.module.css'

export async function getStatisProps() {

  const maxPokemons = 10
  //let offset = 24

  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {

  return (
    <>
      <div>
        <h1>PokeNext.js</h1>

        <ul>
          {pokemons?.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
