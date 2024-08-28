import { PokeTypes } from "../../utils/BackgroundsByType";

export interface IFilterComponent {
  filterSelected?: PokeTypes | null;
  handleSetFilterSelected: (type: PokeTypes | null) => void;
  pokemonsList: any[];
}
