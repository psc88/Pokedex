import { useMemo, useState } from "react"
import { useConsumerContext } from "../../context/useConsumerContext"
import { useFetchPokemon } from "../../service/useFetchPokemon"
import { itemsPerPage } from "../../constant/constant"

export const usePokedexMain = () => {
  const {
    error,
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
    loading,
    pokemonsList,
    filterSelected,
    handleSetFilterSelected
  } = useConsumerContext()

  const { fetchPokemons } = useFetchPokemon({
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
  })

  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleSetCurrentPage = (value: number) => {
    setCurrentPage(value)
  }

  // Filtrar Pokémon según el tipo seleccionado
  const filteredPokemons = useMemo(() => {
    return filterSelected
      ? pokemonsList.filter((pokemon) => pokemon.types.includes(filterSelected))
      : pokemonsList;
  }, [pokemonsList, filterSelected]);

  // Paginar los Pokémon filtrados
  const paginatedPokemons = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPokemons.slice(startIndex, endIndex);
  }, [filteredPokemons, currentPage]);

  return {
    fetchPokemons,
    handleSetCurrentPage,
    handleSetFilterSelected,
    error,
    loading,
    pokemonsList,
    paginatedPokemons,
    currentPage,
    itemsPerPage,
    filteredPokemons,
    filterSelected
  }
}
