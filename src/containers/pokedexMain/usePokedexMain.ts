import { useMemo } from "react"
import { useConsumerContext } from "../../context/useConsumerContext"
import { useFetchPokemon } from "../../service/useFetchPokemon"
import { itemsPerPage } from "../../constant/constant"

export const usePokedexMain = () => {
  const {
    error,
    loading,
    pokemonsList,
    filterSelected,
    currentPage,
    handleSetCurrentPage,
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
    handleSetFilterSelected
  } = useConsumerContext()

  const { fetchPokemons } = useFetchPokemon({
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
  })

  const filteredPokemons = useMemo(() => {
    return filterSelected
      ? pokemonsList.filter((pokemon) => pokemon.types.includes(filterSelected))
      : pokemonsList
  }, [pokemonsList, filterSelected])

  const paginatedPokemons = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredPokemons.slice(startIndex, endIndex)
  }, [filteredPokemons, currentPage])

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
