const SELECT_POKEMON = "SELECT_POKEMON";

// action creation

export const selectPokemon = (pokemon) => {
  return {
    type: SELECT_POKEMON,
    pokemon,
  };
};

export const selectPokemonReducer = (state = "bulbasaur", action) => {
  switch (action.type) {
    case SELECT_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
