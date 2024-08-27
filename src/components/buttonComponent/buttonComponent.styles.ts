import styled from "styled-components"
import { colors } from "../../constant/constant";

export const PokeballButton = styled.button`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.HEX.WHITE};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px ${colors.HEX.BACKGROUND_BLACK};
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

export const PokeballTop = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${colors.HEX.RED_POKE};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`

export const PokeballBottom = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${colors.HEX.WHITE};
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const PokeballCenter = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.HEX.WHITE};
  border: 5px solid black;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const InnerPokeballCenter = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  position: absolute;
  border-radius: 50%;
  top: 25%;
  left: 25%;
`