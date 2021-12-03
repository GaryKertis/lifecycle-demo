import React from "react";
import Pokemon from "./Pokemon";
import PokeSelector from "./PokeSelector";
import { connect } from "react-redux";
import { fetchPokemon, removePokemon } from "../store/pokemonDeck";

const MyApp = (props) => {
  const allPokemon = Object.keys(props.pokemon).map((name) => {
    return (
      <Pokemon
        key={name}
        name={name}
        imgUrl={props.pokemon[name]}
        remove={props.removePokemon}
      />
    );
  });

  return (
    <div>
      <PokeSelector />
      <button onClick={() => props.addPokemon(props.selected)}>
        Add to List
      </button>
      <div className="poketainer">{allPokemon}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.currentlySelected,
    pokemon: state.deck,
  };
};

const mapDispatch = (dispatch) => {
  return {
    // note that behind the scenes this is an async action.
    // but thanks to thunk middleware our component doesn't need to know.
    addPokemon: () => dispatch(fetchPokemon()),
    // we could also move the remove action to the Pokemon component
    // and dispatch it directly. But I'd argue it's cleaner to have
    // add and remove managed in the same component.
    removePokemon: (pokemon) => dispatch(removePokemon(pokemon)),
  };
};
export default connect(mapStateToProps, mapDispatch)(MyApp);
