import React, { useState, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Pokedex from "./components/Pokedex.jsx";
import { pokemonNames } from "./names.js";
import "./styles/App.css";

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
    setHighScore((prev) => (selected.length > prev ? selected.length : prev));
  }, [selected]);

  return (
    <>
      <ScoreBoard currentScore={selected.length} highScore={highScore} />
      <Pokedex deck={deck} onClick={handleClick} />
    </>
  );
}

export default App;
