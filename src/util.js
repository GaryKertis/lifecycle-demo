import axios from 'axios';
export const myLogger = function (message, color = 'lightblue') {
  console.log(`%c${this.constructor.name}: ${message}`, `color: ${color}`);
};

export const fetchPokemonImage = async function (pokemonName) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return data.sprites.front_default;
};
