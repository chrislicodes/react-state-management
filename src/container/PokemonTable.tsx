import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { IPokemon } from "../api";
import PokemonRow from "../components/PokemonRow";
import { usePokemonStore, fetchPokemon, setSelectedPokemon } from "../store";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const dispatch = usePokemonStore(useCallback((state) => state.dispatch, []));
  const [pokemon, pokemonLength, loading, error] = usePokemonStore(
    useCallback(
      (state) => [
        state.pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(state.filter.toLowerCase())
        ),
        state.pokemon.length,
        state.loading,
        state.error,
      ],
      []
    )
  );

  useEffect(() => {
    //@ts-ignore
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
          pokemon.map((pokemon: IPokemon) => (
            <PokemonRow
              key={pokemon.name}
              pokemon={pokemon}
              //@ts-ignore
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
