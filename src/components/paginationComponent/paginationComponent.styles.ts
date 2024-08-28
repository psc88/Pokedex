import styled from "styled-components"
import { colors } from "../../constant/constant"

export const SCPaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const SCArrowButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) =>
    disabled ? colors.HEX.LIGHT_GRAY : colors.HEX.YELLOW_POKEDEX};
  color: ${colors.HEX.DARK_GRAY};
  border: none;
  border-radius: 16px;
  padding: 12px 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 8px ${colors.HEX.BACKGROUND_BLACK2};
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.HEX.LIGHT_GRAY : colors.HEX.YELLOW_POKEDEX_BACKGROUND};
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export const SCCurrentPage = styled.div`
  background-color: ${colors.HEX.BLUE};
  color: white;
  border-radius: 16px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`
