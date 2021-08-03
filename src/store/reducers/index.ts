import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";

export const reducers = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof reducers>; //neede for proper useSelector typings
