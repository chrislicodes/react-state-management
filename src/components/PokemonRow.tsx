import React from "react";
import { IPokemon } from "../api";

interface Props {
  pokemon: IPokemon;
  onClick: () => void;
}

const PokemonRow: React.FC<Props> = ({ pokemon, onClick }) => {
  const pokemonIndices = pokemon.game_indices;
  const pokemonIndex = pokemonIndices[pokemonIndices.length - 1].game_index;

  const pokemonName = pokemon.name;

  const pokemonTypes = pokemon.types
    .map((types: any) => types.type.name)
    .join(", ");

  const pokemonImageURL = pokemon.sprites.front_default;

  return (
    <tr key={pokemonIndex}>
      <td>{pokemonIndex}</td>
      <td>{pokemonName}</td>
      <td>{pokemonTypes}</td>
      <td>
        <img src={pokemonImageURL} alt={`${pokemonName} Sprite`} />
      </td>
      <td>
        <button onClick={onClick}>Show</button>
      </td>
    </tr>
  );
};

export default PokemonRow;
