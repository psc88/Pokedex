import { URLBase } from "../constant/constant"
import { IUseFetchPokemon, TAllPokeResult, TPokeType } from "../context/context.interface"

export const useFetchPokemon = ({
  handleSetError,
  handleSetLoading,
  handleSetPokemonsList,
}: IUseFetchPokemon) => {
  const fetchPokemons = async () => {
    handleSetLoading(true)
    handleSetError(null)
    try {
      const response = await fetch(`${URLBase.API_POKEMON}pokemon?limit=10000&offset=0`)
      const data = await response.json()

      const pokemonResults: TAllPokeResult[] = data.results

      const detailedPokemonData = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          try {
            // Obtengo detalles del Pokémon
            const pokemonDetailResponse = await fetch(pokemon.url)
            // TODO: tipar pokemonDetail
            const pokemonDetail = await pokemonDetailResponse.json()

            // Intento obtener la descripción del Pokémon
            let description = "No description available"
            try {
              const speciesResponse = await fetch(
                `${URLBase.API_POKEMON}pokemon-species/${pokemonDetail.id}/`
              )
              const speciesData = await speciesResponse.json()
              const descriptionEntry = speciesData.flavor_text_entries.find(
                (entry: any) => entry.language.name === "en"
              )
              description = descriptionEntry
                ? descriptionEntry.flavor_text
                : description
            } catch (e) {
              handleSetError(`Error fetching species data for ${pokemonDetail.name}`)
            }

            // Devuelvo sólo los datos que necesito
            return {
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              image: pokemonDetail.sprites.front_default,
              description,
              stats: {
                hp: pokemonDetail.stats.find((stat: any) => stat.stat.name === "hp")?.base_stat || "N/A",
                attack: pokemonDetail.stats.find((stat: any) => stat.stat.name === "attack")?.base_stat || "N/A",
                defense: pokemonDetail.stats.find((stat: any) => stat.stat.name === "defense")?.base_stat || "N/A",
                weight: pokemonDetail.weight,
                height: pokemonDetail.height,
                abilities: pokemonDetail.abilities.slice(0, 2).map((ability: any) => ability.ability.name),
              },
              types: pokemonDetail.types.map((type: any) => type.type.name)
            }
          } catch (err) {
            console.error(`Error fetching data for ${pokemon.name}`, err)
            return null
          }
        })
      )
      // Filtra los Pokémon que no pudieron ser obtenidos (null)
      const validPokemonData = detailedPokemonData.filter(
        (pokemon) => pokemon !== null
      )      
      handleSetPokemonsList(validPokemonData)
    } catch (err) {
      handleSetError("Error fetching data")
    } finally {
      handleSetLoading(false)
    }
  }
  return {
    fetchPokemons
  }
}
