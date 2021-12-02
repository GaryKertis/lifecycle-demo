import React from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import PokeSelector from "./PokeSelector";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      selected: "bulbasaur",
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.removePokemon = this.removePokemon.bind(this);
  }

  handleSelect(event) {
    const selected = event.target.value;
    this.setState({ selected });
  }

  async addPokemon() {
    const name = this.state.selected;
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const imgUrl = data.sprites.front_default;
    const pokemon = { ...this.state.pokemon };
    pokemon[name] = imgUrl;
    this.setState({ pokemon });
  }

  removePokemon(id) {
    const pokemon = { ...this.state.pokemon };
    delete pokemon[id];
    this.setState({ pokemon });
  }

  render() {
    const allPokemon = Object.keys(this.state.pokemon).map((name) => {
      return (
        <Pokemon
          key={name}
          name={name}
          imgUrl={this.state.pokemon[name]}
          remove={this.removePokemon}
        />
      );
    });

    return (
      <div>
        <PokeSelector onChange={this.handleSelect} />
        <button onClick={this.addPokemon}>Add to List</button>
        <div className="poketainer">{allPokemon}</div>
      </div>
    );
  }
}

export default App;
