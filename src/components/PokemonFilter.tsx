import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { setFilter } from "../store/action-creators";
interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  const dispatch = useDispatch();
  const { filter } = useTypedSelector((state) => state.pokemon);
  return (
    <SearchInput
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder={placeholder}
    />
  );
};

export default PokemonFilter;
