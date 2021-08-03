import React from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  const { setFilter } = useActions();
  const { filter } = useTypedSelector((state) => state.pokemon);
  return (
    <SearchInput
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default PokemonFilter;
