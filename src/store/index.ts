import create from "zustand";
import { devtools } from "zustand/middleware";
import { pokemonReducer, PokemonStoreData } from "./reducer";

const initialState = {
  pokemon: [],
  selectedPokemon: null,
  loading: false,
  filter: "",
  error: null,
};

//types with redux middleware are getting a bit weird - in devtools we dont see the names that way
export const usePokemonStore = create<PokemonStoreData>(
  devtools((set) => ({
    ...initialState,
    dispatch: (args) => set((state) => pokemonReducer(state, args)),
  }))
);

export * from "./action-creator";
export * from "./actions";
export * from "./reducer";
