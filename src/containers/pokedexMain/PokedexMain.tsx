import { FC } from "react"
import { SCContainer } from "./PokedexMain.styles"
import { Header } from "../header"
import { ButtonComponent } from "../../components"
import { LoadingComponent } from "../../components/loadingComponent"
import { usePokedexMain } from "./usePokedexMain"
import { CardComponent } from "../../components/cardComponent"

export const PokedexMain: FC = () => {
  const { fetchPokemons, loading, pokemonsList } = usePokedexMain()
  console.log(pokemonsList)
  
  return (
    <SCContainer>
      <Header/>
      <ButtonComponent
        onClick={() => fetchPokemons()}
      />
      <CardComponent/>
      {loading && (<LoadingComponent />)}
    </SCContainer>
  )
}
