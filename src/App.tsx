import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { IPokemon } from "./interfaces";
import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";

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

const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;
`;

const SearchInput = styled.input`
  outline: none;
  height: 25px;
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
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );

        const fetchURLs = pokemonList.data.results.map(
          (pokemon: any) => pokemon.url
        );

        const fullPokemonData: any[] = [];

        for await (const url of fetchURLs) {
          const data = await axios.get(url);
          fullPokemonData.push(data.data);
        }

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
        <SearchInput
          placeholder="Search for a pokemon name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Header>
      <Content>
        <Left>
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
              {(filteredPokemon.length &&
                filteredPokemon.map((pokemon) => (
                  <PokemonRow
                    key={pokemon.name}
                    pokemon={pokemon}
                    onClick={() => setSelectedItem(pokemon)}
                  />
                ))) || (
                <tr>
                  <td>Loading..</td>
                </tr>
              )}
            </tbody>
          </table>
        </Left>
        <Right>{selectedItem && <PokemonInfo pokemon={selectedItem} />}</Right>
      </Content>
    </Layout>
  );
};

export default App;
