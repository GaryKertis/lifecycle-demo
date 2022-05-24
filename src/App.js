import React from 'react';
import Pokemon from './Pokemon';
import { fetchPokemonImage, myLogger } from './util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonName: 'eevee',
      imgUrl: '',
    };
    this.logger = myLogger.bind(this);
    this.logger('constructor');
  }

  async componentDidMount() {
    this.logger('componentDidMount');
    this.setState({ imgUrl: await fetchPokemonImage(this.state.pokemonName) });
  }

  componentDidUpdate() {
    this.logger('componentDidUpdate');
  }

  parentCallback(someData) {
    console.log('This is the parent callback', someData);
  }

  async handleClick(pokemon) {
    this.setState({ pokemonName: pokemon, imgUrl: await fetchPokemonImage(pokemon) });
  }

  clear() {
    this.setState({ pokemonName: undefined });
  }

  render() {
    this.logger('render');
    return (
      <div>
        <h1>{this.state.pokemonName}</h1>
        <button onClick={() => this.handleClick('pikachu')}>Pikachu</button>
        <button onClick={() => this.handleClick('meowth')}>Meowth</button>
        <button onClick={() => this.clear()}>Clear</button>
        {this.state.pokemonName && (
          <Pokemon callback={(data) => this.parentCallback(data)} imgUrl={this.state.imgUrl} />
        )}
      </div>
    );
  }
}

export default App;
