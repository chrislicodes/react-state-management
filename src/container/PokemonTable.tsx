import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import PokemonRow from "../components/PokemonRow";
import { usePokemonStore } from "../store";
import { fetchPokemon, setSelectedPokemon } from "../store";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const [pokemon, pokemonLength, error, loading, dispatch] = usePokemonStore(
    useCallback((state) => {
      return [
        state.pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(state.filter.toLowerCase())
        ),
        state.pokemon.length,
        state.error,
        state.loading,
        state.dispatch,
      ];
    }, [])
  );

  useEffect(() => {
    fetchPokemon(dispatch);
  }, [dispatch]);

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
        {(pokemonLength &&
          pokemon.map((pokemon) => (
            <PokemonRow
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(dispatch, pokemon)}
            />
          ))) || (
          <tr>
            <td>
              {(loading && "Loading ..") ||
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
