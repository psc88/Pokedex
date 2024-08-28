import { FC } from 'react'
import { SCContainerFilter, SCFilterHeader, SCFilterOption, SCFilterOptions, SCFiltersIcon } from './filterComponent.styles'
import { background, PokeTypes } from '../../utils/BackgroundsByType'
import { IFilterComponent } from './filterComponent.interface'
import { useFilterComponent } from './usefilterComponent'
import { colors } from '../../constant/constant'
import { messages } from '../../constant/messages'
import { FaChevronUp } from 'react-icons/fa'

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
    <SCContainerFilter open={open}>
      <SCFilterHeader onClick={() => handleSetOpen(!open)}>
        <span>{filterSelected || messages.SELECTED_TYPE}</span>
        <SCFiltersIcon open={open}>
          <FaChevronUp/>
        </SCFiltersIcon>
      </SCFilterHeader>
      {open && (
        <SCFilterOptions>
          <SCFilterOption
            key={"all"}
            onClick={() => handleFilterClick(null)}
            selected={filterSelected === null}
            style={{ background: colors.HEX.LIGHT_GRAY2 }}
          >
            Todos
          </SCFilterOption>
          {types.map((type: PokeTypes, index: number) => (
            <SCFilterOption
              key={type}
              onClick={() => handleFilterClick(type)}
              selected={filterSelected === type}
              style={{ background: background[type] }}
              isLastItem={types.length === index + 1}
            >
              {type}
            </SCFilterOption>
          ))}
        </SCFilterOptions>
      )}
    </SCContainerFilter>
  );
}
