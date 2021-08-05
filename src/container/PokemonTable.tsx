import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import PokemonRow from "../components/PokemonRow";
import { usePokemonStore } from "../store";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const [pokemon, pokemonLength, fetchPokemon, error] = usePokemonStore(
    useCallback((state) => {
      return [
        state.pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(state.filter.toLowerCase())
        ),
        state.pokemon.length,
        state.fetchPokemon,
        state.error,
      ];
    }, [])
  );

  const setSelectedPokemon = usePokemonStore(
    useCallback((state) => {
      return state.setSelectedPokemon;
    }, [])
  );

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <table>
      <thead>
        <tr>
          <TableHeader>Latest Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Sprite</TableHeader>
          <TableHeader>More Info</TableHeader>
        </tr>
      </thead>
      <tbody>
        {(pokemon.length &&
          pokemon.map((pokemon) => (
            <PokemonRow
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))) || (
          <tr>
            <td>
              {(!pokemonLength && !error && "Loading ..") ||
                (error && `Something went wrong. :( - ${error}`) ||
                "No entries found"}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PokemonTable;
