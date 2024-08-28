import { IPaginationComponent } from "./paginationComponent.interface"

export const usePaginationComponent = ({
  handleSetCurrentPage,
  itemsPerPage,
  totalItems,
  currentPage
}: IPaginationComponent) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handleSetCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handleSetCurrentPage(currentPage + 1)
    }
  }
  return {
    totalPages,
    handlePrevClick,
    handleNextClick,
  }
}
