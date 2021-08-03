import React from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
}

const SearchInput = styled.input`
  outline: none;
  height: 25px;
`;

const PokemonFilter: React.FC<Props> = ({ placeholder }) => {
  return (
    <div></div>
    // <SearchInput

    //   value={filter}
    //   onChange={(e) =>
    //     dispatch({ type: ActionType.SET_FILTER, payload: e.target.value })
    //   }
    //   placeholder={placeholder}
    // />
  );
};

export default PokemonFilter;
