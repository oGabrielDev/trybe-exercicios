import PokemonCart from './PokemonCart'
import React from 'react';


export default class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        { pokemons.map((pokemon) => <PokemonCart key={pokemon.id} pokemon={ pokemon } /> )}
      </div>
    );
  }
}
