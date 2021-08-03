import { IPokemon } from "../api";

interface Props {
  pokemon: IPokemon;
}

const PokemonInfo: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <h1>{pokemon!.name}</h1>
      <ul>
        {pokemon.stats.map((stat, i) => (
          <li key={i}>
            {stat.stat.name} - {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonInfo;
