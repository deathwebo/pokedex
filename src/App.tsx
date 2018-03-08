import * as React from 'react';
import PokemonGrid from './components/PokemonGrid';
import {
  default as PokemonDetails,
  PokemonDetailsInterface,
} from './components/PokemonDetails';

import './App.css';

interface Pokemon {
  name: string;
  url: string;
}

interface Props {}

interface State {
  selectedPokemon: string;
  currentPokemon?: PokemonDetailsInterface;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedPokemon: '',
    };

    this.fetchCurrentPokemon = this.fetchCurrentPokemon.bind(this);
  }

  fetchCurrentPokemon(pokemon: Pokemon) {
    this.setState({
      selectedPokemon: pokemon.name,
    });

    fetch(pokemon.url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          currentPokemon: data,
        });
      });
  }

  render() {
    return (
      <div className="App container">
        <h1>Pokedex</h1>
        <div className="row">
          <div className="col s8">
            <h2>Pokemons</h2>
            <PokemonGrid 
              fetchCurrentPokemon={this.fetchCurrentPokemon}
              selectedPokemon={this.state.selectedPokemon}
            />
          </div>
          <div className="col s4">
            <PokemonDetails pokemon={this.state.currentPokemon} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
