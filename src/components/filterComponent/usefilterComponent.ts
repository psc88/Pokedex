import { useState } from "react"
import { IFilterComponent } from "./filterComponent.interface"
import { PokeTypes } from "../../utils/BackgroundsByType"

export const useFilterComponent = ({
  pokemonsList,
  handleSetFilterSelected
}: IFilterComponent) => {
    const [open, setOpen] = useState(false)

    const handleSetOpen = (value: boolean) => {
      setOpen(value)
    }

    const types = pokemonsList.reduce((acc, pokemon) => {
      pokemon.types.forEach((type: PokeTypes) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
      });
      return acc;
    }, [])
  
    const handleFilterClick = (type: PokeTypes | null) => {
      handleSetFilterSelected(type)
      setOpen(false)
    }
  return {
    open,
    types,
    handleFilterClick,
    handleSetOpen
  }
}
