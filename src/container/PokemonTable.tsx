import React, { useEffect } from "react";
import styled from "styled-components";
import PokemonRow from "../components/PokemonRow";
import { IPokemon } from "../api";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const { fetchPokemon, setSelectedPokemon } = useActions();
  const { pokemon, error, loading, filter } = useTypedSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    fetchPokemon();
  }, []);

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
        {(!loading &&
          !error &&
          pokemon
            .filter((pokemon: IPokemon) => pokemon.name.includes(filter))
            .map((pokemon: IPokemon) => (
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
