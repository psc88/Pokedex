import styled from 'styled-components'
import { colors } from '../../constant/constant'

export const SCStatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
`

export const SCStatLabel = styled.span<{ color: string }>`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({color}) => color};
  font-weight: bold;
`

export const SCStatBar = styled.div<{ value: number }>`
  background-color: ${colors.HEX.LIGHT_GRAY};
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    background-color: ${colors.HEX.YELLOW};
    border-radius: 8px;
    display: block;
    height: 100%;
    width: ${(props) => props.value}%;
  }
`