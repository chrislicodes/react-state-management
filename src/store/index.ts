import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { pokemonReducer, initialState } from "./reducer";

export const usePokemonStore = create(
  devtools(redux(pokemonReducer, initialState))
);

export * from "./action-creator";
export * from "./actions";
export * from "./reducer";
