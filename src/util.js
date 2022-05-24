import axios from 'axios';
export const myLogger = function (message, color = 'lightblue') {
  const start = new Date().getTime();
  while (new Date().getTime() < start + 1000);
  console.log(`%c${this.constructor.name}: ${message}`, `color: ${color}`);
};

export const fetchPokemonImage = async function (pokemonName) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return data.sprites.front_default;
};
