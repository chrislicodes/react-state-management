import styled from "styled-components";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { IPokemon } from "./api";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./store/PokemonContext";
import {
  ActionType,
  pokemonReducer,
  initialState,
} from "./store/pokemonReducer";

const Layout = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
`;

const Left = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div``;

const Heading = styled.h1`
  align-self: center;
`;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  useEffect(() => {
    (async function fetchPokemonData() {
      try {
        const pokemonList = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=503"
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
          type: ActionType.SET_POKEMON_LIST,
          payload: fullPokemonData,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Layout>
        <Header>
          <Heading>Pokemon Search</Heading>
          <PokemonFilter placeholder="Search for a pokemon name..." />
        </Header>
        <Content>
          <Left>
            <PokemonTable />
          </Left>
          <Right>
            <PokemonInfo />
          </Right>
        </Content>
      </Layout>
    </PokemonContext.Provider>
  );
};

export default App;
