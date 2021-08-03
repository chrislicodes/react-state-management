import React from "react";
import styled from "styled-components";
import PokemonRow from "./PokemonRow";
import { useContext } from "react";
import PokemonContext from "../store/PokemonContext";
import { IPokemon } from "../api";
import { ActionType } from "../store/pokemonReducer";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: React.FC = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);
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
        {(pokemon.length > 0 &&
          pokemon
            .filter((pokemon: IPokemon) => pokemon.name.includes(filter))
            .map((pokemon: IPokemon) => (
              <PokemonRow
                key={pokemon.name}
                pokemon={pokemon}
                onClick={() =>
                  dispatch({
                    type: ActionType.SET_SELECTED_POKEMON,
                    payload: pokemon,
                  })
                }
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
