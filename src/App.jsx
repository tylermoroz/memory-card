// import React, { useEffect, useState } from "react";
import PokemonCard from "./components/Pokemon.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="pokedex">
      <PokemonCard name="bulbasaur"></PokemonCard>
      <PokemonCard name="ivysaur"></PokemonCard>
      <PokemonCard name="venusaur"></PokemonCard>
      <PokemonCard name="charmander"></PokemonCard>
      <PokemonCard name="charmeleon"></PokemonCard>
      <PokemonCard name="charizard"></PokemonCard>
      <PokemonCard name="squirtle"></PokemonCard>
      <PokemonCard name="wartortle"></PokemonCard>
      <PokemonCard name="blastoise"></PokemonCard>
      <PokemonCard name="pikachu"></PokemonCard>
      <PokemonCard name="raichu"></PokemonCard>
      <PokemonCard name="ditto"></PokemonCard>
    </div>
  );
}

export default App;
