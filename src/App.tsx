import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { IPokemon } from "./interfaces";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

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
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>([]);

  const [selectedItem, setSelectedItem] = useState<IPokemon | null>(null);

  useEffect(() => {
    (async function fetchPokemonData() {
      try {
        const pokemonList = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=500"
        );

        const fetchURLs = pokemonList.data.results.map(
          (pokemon: any) => pokemon.url
        );

        // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
        const fullPokemonData: IPokemon[] = await Promise.all(
          fetchURLs.map(async (url: string) => {
            const data = await axios.get(url);
            return data.data;
          })
        );

        setPokemon(fullPokemonData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    const filteredPokemon = [...pokemon].filter((pokemon: IPokemon) =>
      pokemon.name.includes(searchTerm.toLowerCase())
    );

    setFilteredPokemon(filteredPokemon);
  }, [pokemon, searchTerm]);

  return (
    <Layout>
      <Header>
        <Heading>Pokemon Search</Heading>
        <PokemonFilter
          placeholder="Search for a pokemon name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Header>
      <Content>
        <Left>
          <PokemonTable pokemon={filteredPokemon} onClick={setSelectedItem} />
        </Left>
        <Right>{selectedItem && <PokemonInfo pokemon={selectedItem} />}</Right>
      </Content>
    </Layout>
  );
};

export default App;
