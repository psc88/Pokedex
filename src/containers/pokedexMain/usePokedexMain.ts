import { useState } from "react"
import { useConsumerContext } from "../../context/useConsumerContext"
import { useFetchPokemon } from "../../service/useFetchPokemon"

export const usePokedexMain = () => {
  const {
    error,
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
    loading,
    pokemonsList,
  } = useConsumerContext()

  const { fetchPokemons } = useFetchPokemon({
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
  })

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 12

  const handleSetCurrentPage = (value: number) => {
    setCurrentPage(value)
  }

  const paginatedPokemons = pokemonsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return {
    fetchPokemons,
    handleSetCurrentPage,
    error,
    loading,
    pokemonsList,
    paginatedPokemons,
    currentPage,
    itemsPerPage,
  }
}
