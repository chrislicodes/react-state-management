import React from "react";
import styled from "styled-components";
import { usePokemonStore } from "../store";
import { setFilter } from "../store";

interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  const [filter, dispatch] = usePokemonStore((state) => {
    return [state.filter, state.dispatch];
  });

  return (
    <SearchInput
      value={filter}
      onChange={(e) => setFilter(dispatch, e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default PokemonFilter;
