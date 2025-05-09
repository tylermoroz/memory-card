import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Pokedex from "./components/Pokedex.jsx";
import { pokemonNames } from "./names.js";

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
    setHighScore((prev) => (selected.length > prev ? selected.length : prev));
  }, [selected]);

  return (
    <>
      <Header />
      <ScoreBoard currentScore={selected.length} highScore={highScore} />
      <Pokedex deck={deck} onClick={handleClick} />
    </>
  );
}

export default App;
