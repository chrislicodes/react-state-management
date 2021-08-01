import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <SearchInput value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default PokemonFilter;
