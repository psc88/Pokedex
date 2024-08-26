import { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 12

  const fetchPokemons = async () => {
    handleSetLoading(true)
    handleSetError(null)
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
      const data = await response.json()
      const pokemonResults = data.results
      const detailedPokemonData = await Promise.all(
        pokemonResults.map(async (pokemon: any) => {
          // Obtengo detalles del Pokémon
          const pokemonDetailResponse = await fetch(pokemon.url);
          const pokemonDetail = await pokemonDetailResponse.json();

          // Obtengo descripción del Pokémon
          const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDetail.id}/`);
          const speciesData = await speciesResponse.json();
          const descriptionEntry = speciesData.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
          const description = descriptionEntry ? descriptionEntry.flavor_text : 'No description available';

          // Devolver sólo los datos que necesitamos
          return {
            name: pokemonDetail.name,
            image: pokemonDetail.sprites.front_default,
            attacks: pokemonDetail.moves.map((move: any) => move.move.name),
            description: description,
          };
        })
      );

      handleSetPokemonsList(detailedPokemonData)
    } catch (err) {
      handleSetError("Error fetching data")
    } finally {
      handleSetLoading(false)
    }
  }

  const handleSetCurrentPage = (value: number) => {
    setCurrentPage(value)
  }

  const paginatedPokemons = pokemonsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    fetchPokemons,
    handleSetCurrentPage,
    error,
    loading,
    pokemonsList,
    paginatedPokemons,
    currentPage,
    itemsPerPage
  }
}
