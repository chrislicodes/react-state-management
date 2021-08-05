import { usePokemonStore } from "../store";

const PokemonInfo: React.FC = () => {
  const selectedPokemon = usePokemonStore((state) => state.selectedPokemon);
  return (
    (selectedPokemon && (
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
    )) ||
    null
  );
};

export default PokemonInfo;
