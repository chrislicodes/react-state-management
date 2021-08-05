import create, { SetState } from "zustand";
import { IPokemon } from "../api";
import axios from "axios";

interface PokemonStoreData {
  filter: string;
  pokemon: IPokemon[] | [];
  selectedPokemon: IPokemon | null;
}

export interface PokemonStoreState extends PokemonStoreData {
  fetchPokemon: () => void;
  setSelectedPokemon: (pokemon: IPokemon) => void;
  setFilter: (name: string) => void;
}

export const usePokemonStore = create<PokemonStoreState>(
  (set: SetState<PokemonStoreState>) => ({
    filter: "",
    pokemon: [],
    selectedPokemon: null,
    fetchPokemon: async (limit = 50) => {
      try {
        const pokemonList = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );

        const fetchURLs = pokemonList.data.results.map(
          (pokemon: any) => pokemon.url
        );

        const fullPokemonData: IPokemon[] = await Promise.all(
          fetchURLs.map(async (url: string) => {
            const data = await axios.get(url);
            return data.data;
          })
        );

        set({ pokemon: fullPokemonData });
      } catch (err) {
        console.log(err);
      }
    },
    setSelectedPokemon: (pokemon: IPokemon) => {
      set({ selectedPokemon: pokemon });
    },
    setFilter: (name: string) => {
      set({ filter: name });
    },
  })
);
