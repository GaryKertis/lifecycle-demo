import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { selectPokemonReducer } from "./currentlySelected";
import { pokemonDeckReducer } from "./pokemonDeck";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    currentlySelected: selectPokemonReducer,
    deck: pokemonDeckReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);
