import PokemonCard from "./PokemonCard.jsx";
import "../styles/Pokedex.css";

function Pokedex({ deck, onClick }) {
  return (
    <div className="pokedex">
      {deck.map((name) => (
        <PokemonCard onClick={() => onClick(name)} key={name} name={name} />
      ))}
    </div>
  );
}

export default Pokedex;
