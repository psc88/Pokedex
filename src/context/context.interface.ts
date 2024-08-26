export interface IContextValues {
  pokemonsList: any[]
  loading: boolean
  error: string | null
  handleSetPokemonsList: (data: any) => void  
  handleSetLoading: (value: boolean) => void
  handleSetError: (value: string | null) => void
}
