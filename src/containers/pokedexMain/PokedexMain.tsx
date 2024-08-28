import { FC } from 'react'
import {
  SCContainerMain,
  SCLabel,
  SCWrapperButtonAndLabel,
  SCWrapperCardComponent,
  SCWrapperFilter,
} from './PokedexMain.styles'
import { Header } from '../header'
import { ButtonComponent } from '../../components'
import { LoadingComponent } from '../../components/loadingComponent'
import { usePokedexMain } from './usePokedexMain'
import { CardComponent } from '../../components/cardComponent'
import { PaginationComponent } from '../../components/paginationComponent'
import { FilterComponent } from '../../components/filterComponent'
import { messages } from '../../constant/messages'

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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Header handleButtonBackToHome={() => {}} />
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
    </div>
  )
}
