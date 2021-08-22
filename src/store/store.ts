import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { Action } from "./actions";
import { pokemonReducer, initialState } from "./reducer";

export const usePokemonStore = create(
  devtools(redux(pokemonReducer, initialState))
);

export const dispatch = (
  usePokemonStore as typeof usePokemonStore & {
    dispatch: (action: Action) => Action;
  }
).dispatch;
