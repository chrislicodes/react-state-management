import { ActionType } from "../action-types";
import { IPokemon } from "../../api";

interface FetchPokemonAction {
  type: ActionType.FETCH_POKEMON;
}

interface FetchPokemonSuccessAction {
  type: ActionType.FETCH_POKEMON_SUCCESS;
  payload: IPokemon[];
}

interface FetchPokemonErrorAction {
  type: ActionType.FETCH_POKEMON_ERROR;
  payload: string;
}

interface SetFilterAction {
  type: ActionType.SET_FILTER;
  payload: string;
}

interface SetSelectedPokemonAction {
  type: ActionType.SET_SELECTED_POKEMON;
  payload: IPokemon;
}

export type Action =
  | FetchPokemonAction
  | FetchPokemonSuccessAction
  | FetchPokemonErrorAction
  | SetFilterAction
  | SetSelectedPokemonAction;
