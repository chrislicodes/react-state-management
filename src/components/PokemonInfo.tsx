import { useTypedSelector } from "../hooks/useTypedSelector";

const PokemonInfo: React.FC = () => {
  const { selectedPokemon } = useTypedSelector((state) => state.pokemon);

  return selectedPokemon ? (
    <>
      <h1>{selectedPokemon!.name}</h1>
      <ul>
        {selectedPokemon.stats.map((stat, i) => (
          <li key={i}>
            {stat.stat.name} - {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  ) : null;
};

export default PokemonInfo;
