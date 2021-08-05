import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import PokemonRow from "../components/PokemonRow";
import { usePokemonStore } from "../store";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const [pokemon, fetchPokemon] = usePokemonStore(
    useCallback((state) => {
      return [state.pokemon, state.fetchPokemon];
    }, [])
  );

  const setSelectedPokemon = usePokemonStore(
    useCallback((state) => {
      return state.setSelectedPokemon;
    }, [])
  );

  const filter = usePokemonStore(
    useCallback((state) => {
      return state.filter;
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
          pokemon
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((pokemon) => (
              <PokemonRow
                key={pokemon.name}
                pokemon={pokemon}
                onClick={() => setSelectedPokemon(pokemon)}
              />
            ))) || (
          <tr>
            <td>Loading..</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PokemonTable;
