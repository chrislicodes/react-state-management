import { Action } from "../actions";
import { ActionType } from "../actions";
import { IPokemon } from "../../api";

interface PokemonState {
  loading: boolean;
  error: string | null;
  filter: string;
  pokemon: IPokemon[] | [];
  selectedPokemon: IPokemon | null;
}

const initialState: PokemonState = {
  loading: false,
  error: null,
  filter: "",
  pokemon: [],
  selectedPokemon: null,
};

export const pokemonReducer = (
  state: PokemonState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.FETCH_POKEMON:
      return {
        ...initialState,
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
