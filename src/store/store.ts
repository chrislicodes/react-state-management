import React, { Dispatch } from "react";
import { IPokemon } from "../api";
import { Action } from "../store";

export interface PokemonState {
  loading: boolean;
  error: string | null;
  filter: string;
  pokemon: IPokemon[] | [];
  selectedPokemon: IPokemon | null;
}

export const initialState: PokemonState = {
  loading: false,
  error: null,
  filter: "",
  pokemon: [],
  selectedPokemon: null,
};

export interface IPokemonContext {
  state: PokemonState;
  dispatch: Dispatch<Action>;
}

export const PokemonContext = React.createContext<IPokemonContext>({
  state: initialState,
  dispatch: () => {},
});
