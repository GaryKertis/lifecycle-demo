import React from "react";

const pokemon = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
];

const PokeSelector = (props) => {
  return (
    <select onChange={props.onChange} value={props.selectedColor}>
      {pokemon.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default PokeSelector;
