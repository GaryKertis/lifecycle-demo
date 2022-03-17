import React from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const myLogger = (message) => {
  console.log(`%c${message}`, "color: blue");
};
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonName: "eevee",
      imgUrl: "",
    };

    myLogger("constructor");
  }

  async componentDidMount() {
    myLogger("componentDidMount");
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`
    );
    const imgUrl = data.sprites.front_default;
    this.setState({ imgUrl });
  }

  componentDidUpdate() {
    myLogger("componentDidUpdate");
  }

  parentCallback(someData) {
    console.log("This is the parent callback", someData);
  }

  async handleClick(pokemon) {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const imgUrl = data.sprites.front_default;
    this.setState({ pokemonName: pokemon, imgUrl });
  }

  clear() {
    this.setState({ pokemonName: undefined });
  }

  render() {
    myLogger("render");
    return (
      <div>
        <h1>{this.state.pokemonName}</h1>
        <button onClick={() => this.handleClick("pikachu")}>Pikachu</button>
        <button onClick={() => this.handleClick("meowth")}>Meowth</button>
        <button onClick={() => this.clear()}>Clear</button>
        {this.state.pokemonName && (
          <Pokemon
            callback={(data) => this.parentCallback(data)}
            imgUrl={this.state.imgUrl}
          />
        )}
      </div>
    );
  }
}

export default App;
