import React from "react";
import styled from "styled-components";
import PokemonRow from "./PokemonRow";
import { useContext } from "react";
import PokemonContext from "../store/PokemonContext";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const { filteredPokemon, setSelectedItem } = useContext(PokemonContext);
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
        {(filteredPokemon!.length &&
          filteredPokemon!.map((pokemon) => (
            <PokemonRow
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => setSelectedItem(pokemon)}
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
