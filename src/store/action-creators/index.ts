import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actions";
import { Action } from "../actions";
import { IPokemon } from "../../api";

export const fetchPokemon = (limit = 50) => {
  return async (dispatch: Dispatch<Action>) => {
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
};

export const setFilter = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_FILTER,
      payload: name,
    });
  };
};

export const setSelectedPokemon = (pokemon: IPokemon) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SELECTED_POKEMON,
      payload: pokemon,
    });
  };
};
