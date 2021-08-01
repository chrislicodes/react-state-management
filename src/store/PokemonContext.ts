import React from "react";
import { IPokemon } from "../interfaces";

interface IPokemonContext {
  searchTerm: string;
  filteredPokemon: IPokemon[] | null;
  selectedItem: IPokemon | null;
  setSearchTerm: (term: string) => void;
  setSelectedItem: (pokemon: IPokemon) => void;
  setFilteredPokemon: (pokemon: IPokemon[]) => void;
}

const PokemonContext = React.createContext<IPokemonContext>({
  searchTerm: "",
  filteredPokemon: null,
  selectedItem: null,
  setSearchTerm: (term: string) => {},
  setSelectedItem: (pokemon: IPokemon) => {},
  setFilteredPokemon: (pokemon: IPokemon[]) => {},
});

export default PokemonContext;
