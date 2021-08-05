import { IPokemon } from "../api";

export enum ActionType {
  FETCH_POKEMON = "FETCH_POKEMON",
  FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS",
  FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR",
  SET_FILTER = "SET_FILTER",
  SET_SELECTED_POKEMON = "SET_SELECTED_POKEMON",
}

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
