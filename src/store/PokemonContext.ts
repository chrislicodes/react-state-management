import React, { Dispatch } from "react";
import { PokemonState, initialState, Action } from "./pokemonReducer";

interface IPokemonContext {
  state: PokemonState;
  dispatch: Dispatch<Action>;
}

const PokemonContext = React.createContext<IPokemonContext>({
  state: initialState,
  dispatch: () => {},
});

export default PokemonContext;
