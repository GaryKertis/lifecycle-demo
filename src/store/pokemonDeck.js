import axios from "axios";

const ADD_POKEMON = "ADD_POKEMON";
const REMOVE_POKEMON = "REMOVE_POKEMON";

// action creation
export const addPokemon = (pokemon) => {
  return {
    type: ADD_POKEMON,
    pokemon,
  };
};
export const removePokemon = (pokemon) => {
  return {
    type: REMOVE_POKEMON,
    pokemon,
  };
};

// Thunk creator
export const fetchPokemon = () => {
  return async (dispatch, getState) => {
    // even though currentlySelected is managed in a separate
    // reducer, we can still access it with getState.
    const { currentlySelected: name } = getState();

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const imgUrl = data.sprites.front_default;
    dispatch(addPokemon({ name, imgUrl }));
  };
};

export const pokemonDeckReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      const copiedState = { ...state };
      copiedState[action.pokemon.name] = action.pokemon.imgUrl;
      return copiedState;
    }
    case REMOVE_POKEMON: {
      const copiedState = { ...state };
      delete copiedState[action.pokemon];
      return copiedState;
    }
    default:
      return state;
  }
};
