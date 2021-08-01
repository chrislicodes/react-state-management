import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import PokemonContext from "../store/PokemonContext";

interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  const { searchTerm, setSearchTerm } = useContext(PokemonContext);

  return (
    <SearchInput
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default PokemonFilter;
