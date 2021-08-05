import { Action, ActionType } from "./actions";
import { IPokemon } from "../api";

export interface PokemonStoreData {
  pokemon: IPokemon[] | [];
  selectedPokemon: IPokemon | null;
  loading: boolean;
  filter: string;
  error: string | null;
  dispatch: (action: Action) => void;
}

export interface PokemonStoreState extends PokemonStoreData {
  fetchPokemon: () => void;
  setSelectedPokemon: (pokemon: IPokemon) => void;
  setFilter: (name: string) => void;
}

export const pokemonReducer = (state: PokemonStoreData, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_POKEMON:
      return {
        ...state,
        loading: true,
      };

    case ActionType.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pokemon: action.payload,
      };

    case ActionType.FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pokemon: [],
      };

    case ActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ActionType.SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    default:
      return state;
  }
};
