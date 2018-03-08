import * as React from 'react';

interface Sprites {
  front_default: string;
}

export interface PokemonDetailsInterface {
  id: number;
  name: string;
  height: number;
  order: number;
  weight: number;
  sprites: Sprites;
}

interface Props {
  pokemon?: PokemonDetailsInterface;
}

export const PokemonDetails: React.SFC<Props> = (props: Props) => {
  if (!props.pokemon) {
    return null;
  }

  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.sprites.front_default} />
      <ul>
        <li><strong>Height:</strong> {props.pokemon.height}</li>
        <li><strong>Weight:</strong> {props.pokemon.weight}</li>
        <li><strong>Order:</strong> {props.pokemon.order}</li>
      </ul>
    </div>
  );
};

export default PokemonDetails;