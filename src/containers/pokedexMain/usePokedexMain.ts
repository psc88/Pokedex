import { useConsumerContext } from "../../context/useConsumerContext"

export const usePokedexMain = () => {
  const {
    error,
    handleSetError,
    handleSetLoading,
    handleSetPokemonsList,
    loading,
    pokemonsList,
  } = useConsumerContext()

  const fetchPokemons = async () => {
    handleSetLoading(true)
    handleSetError(null)
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      const data = await response.json()
      handleSetPokemonsList(data.results)
    } catch (err) {
      handleSetError("Error fetching data")
    } finally {
      handleSetLoading(false)
    }
  }
  return {
    fetchPokemons,
    error,
    loading,
    pokemonsList
  }
}
