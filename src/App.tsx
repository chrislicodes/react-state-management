import styled from "styled-components";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./container/PokemonTable";

import { store } from "./store";
import { Provider } from "react-redux";

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
  return (
    <Provider store={store}>
      <Layout>
        <Header>
          <Heading>Pokemon Search</Heading>
          {/* <PokemonFilter placeholder="Search for a pokemon name..." /> */}
        </Header>
        <Content>
          <Left>
            <PokemonTable />
          </Left>
          <Right>{/* <PokemonInfo /> */}</Right>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
