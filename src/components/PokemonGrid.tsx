import * as React from 'react';

interface PokemonResult {
  name: string;
  url: string;
}

interface State {
  pokemons: PokemonResult[];
  currentPage: number;
  nextPageUrl: string;
  prevPageUrl: string;
}

interface Props {
  fetchCurrentPokemon: (pokemon: PokemonResult) => void;
  selectedPokemon: string;
}

class PokemonGrid extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      pokemons: [],
      currentPage: 1,
      nextPageUrl: '',
      prevPageUrl: '',
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemons: data.results,
        prevPageUrl: data.previous,
        nextPageUrl: data.next,
      });
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pokemons.map((pokemon, idx) => {
            let classname = '';
            if (this.props.selectedPokemon === pokemon.name) {
              classname = 'selected';
            }

            return (
              <tr 
                key={idx}
                onClick={() => this.props.fetchCurrentPokemon(pokemon)}
                className={classname}
              >
                <td>{pokemon.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PokemonGrid;