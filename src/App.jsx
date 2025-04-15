import React, { useEffect, useState, useMemo } from "react";
import PokemonCard from "./components/Pokemon.jsx";
import "./styles/App.css";

function App() {
  const [deck, setDeck] = useState([]);

  const shuffleDeck = useMemo(() => {
    const pokemonNames = [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
      "squirtle",
      "wartortle",
      "blastoise",
      "pikachu",
      "raichu",
      "ditto",
    ];
    return () => {
      const shuffled = [...pokemonNames].sort(() => Math.random() - 0.5);
      setDeck(shuffled);
    };
  }, []);

  useEffect(() => {
    shuffleDeck();
  }, [shuffleDeck]);

  return (
    <div className="pokedex">
      {deck.map((name, index) => (
        <PokemonCard onClick={shuffleDeck} key={index} name={name} />
      ))}
    </div>
  );
}

export default App;
