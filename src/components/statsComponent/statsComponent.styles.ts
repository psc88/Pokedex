import styled from 'styled-components'

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
  background-color: #ddd;
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    background-color: #ffcc00;
    border-radius: 8px;
    display: block;
    height: 100%;
    width: ${(props) => props.value}%;
  }
`