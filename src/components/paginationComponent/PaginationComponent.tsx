import { FC } from "react"
import {
  SCArrowButton,
  SCCurrentPage,
  SCPaginationContainer,
} from "./paginationComponent.styles"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { IPaginationComponent } from "./paginationComponent.interface"
import { usePaginationComponent } from "./usePaginationComponent"

export const PaginationComponent: FC<IPaginationComponent> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handleSetCurrentPage,
}) => {
  const { handleNextClick, handlePrevClick, totalPages } =
    usePaginationComponent({
      currentPage,
      itemsPerPage,
      totalItems,
      handleSetCurrentPage,
    })
  return (
    <SCPaginationContainer>
      <SCArrowButton onClick={handlePrevClick} disabled={currentPage === 1}>
        <FaChevronLeft />
      </SCArrowButton>
      <SCCurrentPage>{currentPage}</SCCurrentPage>
      <SCArrowButton
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </SCArrowButton>
    </SCPaginationContainer>
  )
}
