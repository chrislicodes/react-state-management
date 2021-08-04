import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PokemonRow from "../components/PokemonRow";
import { IPokemon } from "../api";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchPokemon, setSelectedPokemon } from "../store/action-creators";

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const PokemonTable: FC = () => {
  const dispatch = useDispatch();
  const { pokemon, error, loading, filter } = useTypedSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <TableHeader>Latest Index</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Sprite</TableHeader>
          <TableHeader>More Info</TableHeader>
        </tr>
      </thead>
      <tbody>
        {(!loading &&
          !error &&
          pokemon
            .filter(({ name }: IPokemon) => name.includes(filter))
            .map((pokemon: IPokemon) => (
              <PokemonRow
                key={pokemon.name}
                pokemon={pokemon}
                onClick={() => dispatch(setSelectedPokemon(pokemon))}
              />
            ))) || (
          <tr>
            <td>Loading..</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PokemonTable;
