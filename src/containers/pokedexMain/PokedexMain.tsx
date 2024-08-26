import { FC } from "react"
import { SCContainer } from "./PokedexMain.styles"
import { Header } from "../header"
import { ButtonComponent } from "../../components"
import { LoadingComponent } from "../../components/loadingComponent"
import { usePokedexMain } from "./usePokedexMain"
import { CardComponent } from "../../components/cardComponent"
import { Footer } from "../footer"
import { PaginationComponent } from "../../components/paginationComponent"

export const PokedexMain: FC = () => {
  const {
    fetchPokemons,
    handleSetCurrentPage,
    loading,
    pokemonsList,
    paginatedPokemons,
    currentPage,
    itemsPerPage
  } = usePokedexMain()  

  return (
    <SCContainer>
      <Header handleSearch={() => {}} />
      {loading && <LoadingComponent />}
      {!pokemonsList.length && !loading && (
        <ButtonComponent onClick={() => fetchPokemons()} />
      )}
      <CardComponent pokemonsList={paginatedPokemons} />
      <PaginationComponent
        currentPage={currentPage}
        handleSetCurrentPage={handleSetCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={pokemonsList.length}
      />
      <Footer />
    </SCContainer>
  )
}
