import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import PokemonContext from "../store/PokemonContext";
import { ActionType } from "../store/pokemonReducer";

interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);

  return (
    <SearchInput
      value={filter}
      onChange={(e) =>
        dispatch({ type: ActionType.SET_FILTER, payload: e.target.value })
      }
      placeholder={placeholder}
    />
  );
};

export default PokemonFilter;
