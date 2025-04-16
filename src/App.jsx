import React, { useState, useEffect } from "react";
import PokemonCard from "./components/Pokemon.jsx";
import "./styles/App.css";

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

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function App() {
  const [deck, setDeck] = useState(() => shuffleArray(pokemonNames));
  const [selected, setSelected] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const selectPokemon = (name) => {
    if (!selected.includes(name)) {
      setSelected((prev) => {
        const newSelected = [...prev, name];
        console.log(newSelected);
        return newSelected;
      });
    } else {
      setSelected([]);
    }
  };

  const shuffleDeck = () => {
    const shuffled = shuffleArray(pokemonNames);
    setDeck(shuffled);
  };

  const handleClick = (name) => {
    selectPokemon(name);
    shuffleDeck();
  };

  useEffect(() => {
    if (selected.length > highScore) {
      setHighScore(selected.length);
    }
  }, [selected, highScore]);

  return (
    <>
      <h1>Current Score: {selected.length}</h1>
      <h1>High Score: {highScore}</h1>
      <div className="pokedex">
        {deck.map((name) => (
          <PokemonCard
            onClick={() => handleClick(name)}
            key={name}
            name={name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
