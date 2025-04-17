import React, { useEffect, useState } from "react";
import "../styles/PokemonCard.css";

function PokemonCard({ name, onClick }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(() => {
        setPokemon(null);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;
