import pokemons from './data';
import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokemons</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
