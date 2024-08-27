import { FC } from "react"

export interface IPaginationComponent {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  handleSetCurrentPage: (page: number) => void
}

export const PaginationComponent: FC<IPaginationComponent> = ({ 
  currentPage,
  itemsPerPage,
  totalItems,
  handleSetCurrentPage
 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const maxVisiblePages = 5
  

  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  const handlePageClick = (pageNumber: number) => {
    handleSetCurrentPage(pageNumber)
  }

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

  const visiblePages = getPageNumbers()

  return (
    <nav aria-label="Pokemon pagination">
      <ul className="pagination pagination-sl justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={handlePrevClick} disabled={currentPage === 1}>
            Prev
          </button>
        </li>
        {visiblePages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={handleNextClick} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
