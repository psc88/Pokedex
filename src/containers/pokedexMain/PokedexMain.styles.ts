import styled from "styled-components"
import { colors } from "../../constant/constant"

export const SCContainer = styled.div`
  background-color: ${colors.HEX.LIGHTPINK};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SCLabel = styled.span`
  padding: 16px;
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