import styled from "styled-components"
import { colors } from "../../constant/constant"

export const SCLabelCard = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 8px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`

export const SCCardContainer = styled.div<{ borderColor: string }>`
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

export const SCNumber = styled.div<{ color: string }>`
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: bold;
  color: ${({ color }) => color};
`

export const SCScrollableContainer = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  padding: 16px;
  border: 2px solid ${colors.HEX.BACKGROUND_BLACK2};
  border-radius: 16px;
`
