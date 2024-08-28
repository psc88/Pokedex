import { FC } from "react"
import {
  SCContainerMain,
  SCContainerPokedex,
  SCLabel,
  SCWrapperButtonAndLabel,
  SCWrapperCardComponent,
  SCWrapperFilter,
} from "./PokedexMain.styles"
import { usePokedexMain } from "./usePokedexMain"
import { messages } from "../../constant/messages"
import {
  ButtonComponent,
  CardComponent,
  FilterComponent,
  HeaderComponent,
  LoadingComponent,
  PaginationComponent,
} from "../../components"

export const PokedexMain: FC = () => {
  const {
    fetchPokemons,
    handleSetCurrentPage,
    handleSetFilterSelected,
    loading,
    paginatedPokemons,
    currentPage,
    itemsPerPage,
    filteredPokemons,
    filterSelected,
    pokemonsList,
  } = usePokedexMain()
  return (
    <SCContainerPokedex>
      <div>
        <HeaderComponent />
        {!!filteredPokemons.length && (
          <SCWrapperFilter>
            <FilterComponent
              filterSelected={filterSelected}
              handleSetFilterSelected={handleSetFilterSelected}
              pokemonsList={pokemonsList}
            />
          </SCWrapperFilter>
        )}
      </div>
      <SCContainerMain>
        {loading && <LoadingComponent />}
        {!filteredPokemons.length && !loading && (
          <SCWrapperButtonAndLabel>
            <ButtonComponent onClick={() => fetchPokemons()} />
            <SCLabel>{messages.DISCOVER_POKEMON}</SCLabel>
          </SCWrapperButtonAndLabel>
        )}
        {!!filteredPokemons.length && (
          <>
            <SCWrapperCardComponent>
              <CardComponent pokemonsList={paginatedPokemons} />
            </SCWrapperCardComponent>
            {!!filteredPokemons.length && (
              <PaginationComponent
                currentPage={currentPage}
                handleSetCurrentPage={handleSetCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredPokemons.length}
              />
            )}
          </>
        )}
      </SCContainerMain>
    </SCContainerPokedex>
  )
}
