import styled from "styled-components"
import { colors } from "../../constant/constant"

export const SCHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 12px;
  cursor: pointer;
  padding: 16px;
`

export const SCFormContainer = styled.span`
  font-family: 'Pokemon Solid', sans-serif;
  color: ${colors.HEX.DARK_GRAY};
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  color: ${colors.HEX.VERY_DARK_GRAY};
  letter-spacing: .2em;
  text-shadow: 2px 2px 5px ${colors.HEX.MEDIUM_GRAY};
  transition: all 300ms;
`
