import { FC } from "react";
import { SCContainer, SCLabel } from "./PokedexMain.styles";
import { Header } from "../header";
import { ButtonComponent } from "../../components";
import { LoadingComponent } from "../../components/loadingComponent";
import { usePokedexMain } from "./usePokedexMain";
import { CardComponent } from "../../components/cardComponent";
import { PaginationComponent } from "../../components/paginationComponent";

export const PokedexMain: FC = () => {
  const {
    fetchPokemons,
    handleSetCurrentPage,
    loading,
    pokemonsList,
    paginatedPokemons,
    currentPage,
    itemsPerPage,
  } = usePokedexMain();
  return (
    <SCContainer>
      <Header handleButtonBackToHome={() => {}} />
      {loading && <LoadingComponent />}
      {!pokemonsList.length && !loading && (
        <>
          <ButtonComponent onClick={() => fetchPokemons()} />
          <SCLabel>¡Descrubre los Pokémon!</SCLabel>
        </>
      )}
      {!!pokemonsList.length && (
        <PaginationComponent
          currentPage={currentPage}
          handleSetCurrentPage={handleSetCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={pokemonsList.length}
        />
      )}
      <CardComponent pokemonsList={paginatedPokemons} />
    </SCContainer>
  );
};
