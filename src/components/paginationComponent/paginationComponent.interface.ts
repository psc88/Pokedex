export interface IPaginationComponent {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  handleSetCurrentPage: (page: number) => void
}
