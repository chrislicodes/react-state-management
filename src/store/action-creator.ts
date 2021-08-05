import { ActionType, Action } from "./actions";
import { IPokemon } from "../api";
import axios from "axios";

type Dispatch = (args: Action) => void;

export const fetchPokemon = async (dispatch: Dispatch, limit = 50) => {
  dispatch({
    type: ActionType.FETCH_POKEMON,
  });

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

    dispatch({
      type: ActionType.FETCH_POKEMON_SUCCESS,
      payload: fullPokemonData,
    });
  } catch (err) {
    dispatch({
      type: ActionType.FETCH_POKEMON_ERROR,
      payload: err.message,
    });
  }
};

export const setFilter = (dispatch: Dispatch, name: string) => {
  dispatch({
    type: ActionType.SET_FILTER,
    payload: name,
  });
};

export const setSelectedPokemon = (dispatch: Dispatch, pokemon: IPokemon) => {
  dispatch({
    type: ActionType.SET_SELECTED_POKEMON,
    payload: pokemon,
  });
};
