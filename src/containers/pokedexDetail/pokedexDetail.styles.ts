import styled from 'styled-components'
import { colors } from '../../constant/constant'

export const SCContainerDetail = styled.div<{backgroundColor: string}>`
  display: flex;
  height: 100vh;
`

export const SCContainerCardDetail = styled.div<{backgroundColor: string}>`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 16px;
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK3};
  padding: 24px;
  max-width: 400px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 16px;
    box-shadow: none;
  }
`

export const SCBackgroundOverlay = styled.div<{ backgroundColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: 0.5;
  z-index: -1;
`

export const SCHeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SCSpanName = styled.span`
  text-align: center;
  text-transform: capitalize;
  font-size: 28px;
`

export const SCBackAndLabel = styled.div`
  background: none;
  border: none;
  color: ${colors.HEX.WHITE};
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  font-weight: bold;
`

export const SCBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  color: ${colors.HEX.WHITE};
  width: 50px;
  height: 50px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${colors.HEX.WHITE};
    border-radius: 50%;
    opacity: 0.8;
    color: ${colors.HEX.DARK_BLUE};
  }
`

export const SCPokemonNumber = styled.span`
  top: 16px;
  right: 16px;
  color: ${colors.HEX.WHITE};
  font-size: 20px;
  font-weight: bold;
`

export const SCPokemonImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 60px;
`

export const SCPokemonImage = styled.img`
  width: 200px;
  z-index: 1;
`

export const SCPokemonDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.HEX.WHITE_BACKGROUND};
  border-radius: 16px;
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK};
  padding: 48px 24px;
  gap: 12px;
`

export const SCPokemonDescription = styled.span<{color: string}>`
  color: ${({color}) => color};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  display: flex;
`

export const SCTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const SCTypeBadge = styled.span<{ typeColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ typeColor }) => typeColor};
  border-radius: 12px;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
`
