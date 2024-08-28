import { FC } from "react"
import {
  SCContainerFilter,
  SCFilterHeader,
  SCFilterOption,
  SCFilterOptions,
  SCFiltersIcon,
  SCSpanFilter,
} from "./filterComponent.styles"
import { background, PokeTypes } from "../../utils/BackgroundsByType"
import { IFilterComponent } from "./filterComponent.interface"
import { useFilterComponent } from "./usefilterComponent"
import { colors } from "../../constant/constant"
import { messages } from "../../constant/messages"
import { FaChevronUp } from "react-icons/fa"

export const FilterComponent: FC<IFilterComponent> = ({
  filterSelected,
  handleSetFilterSelected,
  pokemonsList,
}) => {
  const { handleFilterClick, handleSetOpen, open, types } = useFilterComponent({
    handleSetFilterSelected,
    pokemonsList,
  })
  return (
    <SCContainerFilter
      open={open}
      backgroundColor={background[filterSelected as PokeTypes]}
    >
      <SCFilterHeader onClick={() => handleSetOpen(!open)}>
        <SCSpanFilter>{filterSelected || messages.SELECTED_TYPE}</SCSpanFilter>
        <SCFiltersIcon open={open}>
          <FaChevronUp />
        </SCFiltersIcon>
      </SCFilterHeader>
      {open && (
        <SCFilterOptions>
          <SCFilterOption
            key={messages.KEY_ALL}
            onClick={() => handleFilterClick(null)}
            style={{ background: colors.HEX.LIGHT_GRAY2 }}
          >
            {messages.TODOS}
          </SCFilterOption>
          {types.map((type: PokeTypes, index: number) => (
            <SCFilterOption
              key={type}
              onClick={() => handleFilterClick(type)}
              style={{ background: background[type] }}
              isLastItem={types.length === index + 1}
            >
              <SCSpanFilter>{type}</SCSpanFilter>
            </SCFilterOption>
          ))}
        </SCFilterOptions>
      )}
    </SCContainerFilter>
  )
}
