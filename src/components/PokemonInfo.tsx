import { useContext } from "react";
import PokemonContext from "../store/PokemonContext";

const PokemonInfo: React.FC = () => {
  const { selectedItem } = useContext(PokemonContext);
  return selectedItem ? (
    <>
      <h1>{selectedItem!.name}</h1>
      <ul>
        {selectedItem!.stats.map((stat, i) => (
          <li key={i}>
            {stat.stat.name} - {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  ) : null;
};

export default PokemonInfo;
