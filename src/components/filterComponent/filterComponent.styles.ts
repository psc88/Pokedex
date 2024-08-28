import styled from "styled-components";
import { colors } from "../../constant/constant";

export const SCContainerFilter = styled.div<{ open: boolean }>`
  background: ${colors.HEX.BLUE};
  border-radius: ${({ open }) => open ? '12px 12px 0px 0px' : '12px'};
  position: relative;
  z-index: 10;
`

export const SCFilterHeader = styled.div`
  padding: 12px 16px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`

export const SCFiltersIcon = styled.div<{ open: boolean }>`
  display: flex;
  width: 16px;
  height: 16px;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`

export const SCFilterOptions = styled.div`
  position: absolute;
  width: 100%;
  z-index: 20;
`

export const SCFilterOption = styled.div<{ selected: boolean, isLastItem?: boolean }>`
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  border-radius: ${({ isLastItem }) => (!isLastItem ? "none" : "0px 0px 16px 16px")};
  background: ${({ selected }) => (selected ? "#777" : "transparent")};
  &:hover {
    background: #666;
  }
`
