import { FC } from "react";
import { usePokedexDetail } from "./usePokedexDetail";
import {
  SCContainerDetail,
  SCHeaderCard,
  SCSpanName,
  SCPokemonNumber,
  SCBackAndLabel,
  SCBackButton,
  SCPokemonImage,
  SCPokemonImageWrapper,
  SCPokemonDetailCard,
  SCPokemonDescription,
  SCTypeContainer,
  SCTypeBadge,
} from "./pokedexDetail.styles";
import { background } from "../../utils/BackgroundsByType";
import { FaArrowLeft } from "react-icons/fa";
import { colors } from "../../constant/constant";
import { StatsComponent } from "../../components/statsComponent";

export const PokedexDetail: FC = () => {
  const { pokeSelected, navigate } = usePokedexDetail();
  return (
    <SCContainerDetail
      backgroundColor={(background as any)[pokeSelected?.types[0]]}
    >
      <SCHeaderCard>
        <SCBackAndLabel>
          <SCBackButton onClick={() => navigate("/")}>
            <FaArrowLeft size={20} />
          </SCBackButton>
          <SCSpanName>{pokeSelected?.name}</SCSpanName>
        </SCBackAndLabel>
        <SCPokemonNumber>#{pokeSelected?.id}</SCPokemonNumber>
      </SCHeaderCard>
      <SCPokemonImageWrapper>
        <SCPokemonImage src={pokeSelected?.image} alt={pokeSelected?.name} />
      </SCPokemonImageWrapper>
      <SCPokemonDetailCard>
        <SCPokemonDescription
          color={(background as any)[pokeSelected?.types[0]]}
        >
          {pokeSelected?.description}
        </SCPokemonDescription>
        <SCTypeContainer>
          {pokeSelected?.types.map((type: any, index: number) => (
            <SCTypeBadge
              key={index}
              typeColor={(background as any)[type] || colors.HEX.LIGHT_GRAY}
            >
              {type}
            </SCTypeBadge>
          ))}
        </SCTypeContainer>
        <StatsComponent pokeSelected={pokeSelected} />
      </SCPokemonDetailCard>
    </SCContainerDetail>
  );
};
