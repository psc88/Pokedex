import styled from "styled-components"
import { colors } from "../../constant/constant"

export const SCContainerPokedex = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

export const SCWrapperCardComponent = styled.div`
  padding: 16px;
`

export const SCContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.HEX.LIGHTPINK};
  width: 100%;
  height: 100%;
`

export const SCLabel = styled.span`
  padding: 16px;
  font-family: 'Pokemon Solid', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.HEX.VERY_DARK_GRAY};
  letter-spacing: 8px;
  text-shadow: 2px 2px 5px ${colors.HEX.MEDIUM_GRAY};
`

export const SCWrapperButtonAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const SCWrapperFilter = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${colors.HEX.LIGHTPINK};
`
