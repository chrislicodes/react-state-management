import React from "react";
import { PokemonState, initialState } from "./pokemonReducer";

interface IPokemonContext {
  state: PokemonState;
  dispatch: any; //add proper typings
}

const PokemonContext = React.createContext<IPokemonContext>({
  state: initialState,
  dispatch: () => {},
});

export default PokemonContext;
