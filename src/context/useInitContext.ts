import { useState } from "react"

export const useInitContext = () => {
  const [pokemonsList, setPokemonsList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  // const [page, setPage] = useState<number>(1)

  const handleSetPokemonsList = (data: any) => {
    setPokemonsList(data)
  }

  const handleSetLoading = (value: boolean) => {
    setLoading(value)
  }

  const handleSetError = (value: string | null) => {
    setError(value)
  }

  return {
    pokemonsList,
    loading,
    error,
    handleSetPokemonsList,
    handleSetLoading,
    handleSetError
  }
}
