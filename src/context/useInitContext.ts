import { useState } from "react"
import { PokeTypes } from "../utils/BackgroundsByType"

export const useInitContext = () => {
  const [pokemonsList, setPokemonsList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [filterSelected, setFilterSelected] = useState<PokeTypes | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleSetPokemonsList = (data: any) => {
    setPokemonsList(data)
  }

  const handleSetLoading = (value: boolean) => {
    setLoading(value)
  }

  const handleSetError = (value: string | null) => {
    setError(value)
  }

  const handleSetFilterSelected = (type: PokeTypes | null) => {
    setFilterSelected(type)
  }

  const handleSetCurrentPage = (value: number) => {
    setCurrentPage(value)
  }

  return {
    pokemonsList,
    loading,
    error,
    filterSelected,
    currentPage,
    handleSetPokemonsList,
    handleSetLoading,
    handleSetError,
    handleSetFilterSelected,
    handleSetCurrentPage
  }
}
