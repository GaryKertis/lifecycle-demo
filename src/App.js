import React from 'react';
import Pokemon from './Pokemon';
import { fetchPokemonImage, myLogger } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.logger = myLogger.bind(this);
    this.logger('constructor');
    this.state = {
      pokemonName: '',
      imgUrl: '',
    };
  }

  async componentDidMount() {
    this.logger('componentDidMount');
    this.setState({
      pokemonName: 'ekans',
      imgUrl: await fetchPokemonImage('ekans'),
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    this.logger('componentDidUpdate');
  }

  async handleClick(pokemon) {
    this.setState({ pokemonName: '' });
    this.setState({ pokemonName: pokemon, imgUrl: await fetchPokemonImage(pokemon) });
  }

  clear() {
    this.setState({ pokemonName: undefined });
  }

  render() {
    this.logger('render');
    const { pokemonName, imgUrl } = this.state;

    return (
      <div>
        <h1>{this.state.pokemonName}</h1>
        <button onClick={() => this.handleClick('pikachu')}>Pikachu</button>
        <button onClick={() => this.handleClick('meowth')}>Meowth</button>
        <button onClick={() => this.clear()}>Clear</button>
        {pokemonName ? <Pokemon imgUrl={imgUrl} /> : <div>Loading...</div>}
      </div>
    );
  }
}

export default App;
