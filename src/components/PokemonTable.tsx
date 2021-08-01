import React from "react";
import { IPokemon } from "../interfaces";
import styled from "styled-components";
import PokemonRow from "./PokemonRow";

interface Props {
  pokemon: IPokemon[];
  onClick: (pokemon: IPokemon) => void;
}

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC<Props> = ({ pokemon, onClick }) => {
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
              onClick={() => onClick(pokemon)}
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
