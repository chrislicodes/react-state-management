import { IPokemon } from "../api";

export interface PokemonState {
  filter: string;
  pokemon: IPokemon[] | [];
  selectedPokemon: IPokemon | null;
}

export enum ActionType {
  SET_FILTER = "SET_FILTER",
  SET_POKEMON_LIST = "SET_POKEMON_LIST",
  SET_SELECTED_POKEMON = "SET_SELECTED_POKEMON",
}

interface SetFilterAction {
  type: ActionType.SET_FILTER;
  payload: string;
}

interface SetPokemonListAction {
  type: ActionType.SET_POKEMON_LIST;
  payload: IPokemon[];
}

interface SetSelectedPokemonAction {
  type: ActionType.SET_SELECTED_POKEMON;
  payload: IPokemon;
}

export type Action =
  | SetFilterAction
  | SetPokemonListAction
  | SetSelectedPokemonAction;

export const pokemonReducer = (state: PokemonState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ActionType.SET_POKEMON_LIST:
      return {
        ...state,
        pokemon: action.payload,
      };

    case ActionType.SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    default:
      throw new Error("No action");
  }
};

export const initialState: PokemonState = {
  filter: "",
  pokemon: [],
  selectedPokemon: null,
};
