import React from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../store/currentlySelected";

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
    <select
      onChange={(e) => props.selectPokemon(e.target.value)}
      value={props.selectedColor}
    >
      {pokemon.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

// if this looks weird, it's just shorthand.
// instead of using curly braces to create a function
// body we can directly return an object by wrapping it in parens.
const mapDispatch = (dispatch) => ({
  selectPokemon: (pokemon) => dispatch(selectPokemon(pokemon)),
});

export default connect(null, mapDispatch)(PokeSelector);
