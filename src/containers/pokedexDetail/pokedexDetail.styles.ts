import styled from 'styled-components'
import { colors } from '../../constant/constant'

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`

export const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 4px solid ${colors.HEX.LIGHT_GRAY};
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK2};
`

export const PokemonName = styled.h1`
  font-size: 2.5rem;
  color: ${colors.HEX.DARK_GRAY};
  text-transform: capitalize;
  margin-bottom: 10px;
  font-family: 'Pokemon', sans-serif;
`

export const PokemonDescription = styled.p`
  font-size: 1rem;
  color: ${colors.HEX.LIGHT_GRAY2};
  margin: 20px 0;
  line-height: 1.5;
`

export const StatsContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  display: inline-block;
  border: 1px solid ${colors.HEX.LIGHT_GRAY};
  padding: 10px;
  border-radius: 8px;
  background-color: ${colors.HEX.WHITE};
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK};
`

export const StatsTitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.HEX.DARK_GRAY};
  margin-bottom: 10px;
  font-family: 'Pokemon', sans-serif;
`;

export const Stat = styled.p`
  font-size: 1rem;
  color: ${colors.HEX.MEDIUM_GRAY};
  margin: 5px 0;
`

export const TypesContainer = styled.div`
  margin-top: 20px;
`

export const Type = styled.span<{ typeColor: string }>`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background-color: ${props => props.typeColor};
  border-radius: 5px;
  font-size: 0.875rem;
  color: ${colors.HEX.WHITE};
  font-weight: bold;
`

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${colors.HEX.WHITE};
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK2};
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.HEX.WHITE};
  }
  &:focus {
    outline: none;
  }
`