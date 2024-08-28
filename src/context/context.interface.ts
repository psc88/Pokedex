import { PokeTypes } from "../utils/BackgroundsByType"
export interface IUseFetchPokemon {
  handleSetLoading: (value: boolean) => void
  handleSetError: (value: string | null) => void
  handleSetPokemonsList: (data: any) => void
}

export type TPokeType = {
  name: PokeTypes
  url: string
}

export type TAllPokeResult = {
  name: PokeTypes
  url: string
}
export interface IContextValues {
  pokemonsList: any[]
  loading: boolean
  error: string | null
  handleSetPokemonsList: (data: any) => void  
  handleSetLoading: (value: boolean) => void
  handleSetError: (value: string | null) => void
  filterSelected: PokeTypes | null
  handleSetFilterSelected: (type: PokeTypes | null) => void
}
