import { FC } from "react"
import { usePokedexDetail } from "./usePokedexDetail"
import {
  BackButton,
  Container,
  PokemonDescription,
  PokemonImage,
  PokemonName,
  Stat,
  StatsContainer,
  StatsTitle,
  Type,
  TypesContainer,
} from "./pokedexDetail.styles"
import { background } from "../../utils/BackgroundsByType"
import { FaArrowLeft } from "react-icons/fa"
import { colors } from "../../constant/constant"

export const PokedexDetail: FC = () => {
  const { pokeSelected, navigate } = usePokedexDetail()
  return (
    <Container>
      <BackButton onClick={() => navigate("/")} aria-label="Regresar">
        <FaArrowLeft size={24} />
      </BackButton>

      <PokemonName>{pokeSelected?.name}</PokemonName>
      <PokemonImage src={pokeSelected?.image} alt={pokeSelected?.name} />
      <PokemonDescription>{pokeSelected?.description}</PokemonDescription>

      <StatsContainer>
        <StatsTitle>Stats</StatsTitle>
        <Stat>HP: {pokeSelected?.stats.hp}</Stat>
        <Stat>Attack: {pokeSelected?.stats.attack}</Stat>
        <Stat>Defense: {pokeSelected?.stats.defense}</Stat>
        <Stat>Weight: {pokeSelected?.stats.weight}</Stat>
        <Stat>Height: {pokeSelected?.stats.height}</Stat>
      </StatsContainer>

      <TypesContainer>
        {pokeSelected?.types.map((type: any, index: number) => (
          <Type
            key={index}
            typeColor={(background as any)[type] || colors.HEX.LIGHT_GRAY}
          >
            {type}
          </Type>
        ))}
      </TypesContainer>
    </Container>
  )
}
