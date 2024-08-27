import styled from 'styled-components';

export const PaginationNav = styled.nav`
  /* Opcional: Puedes añadir estilos adicionales aquí si es necesario */
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  margin: 0;
`;

export const PaginationButton = styled.button`
  display: block;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #dee2e6;
  border-radius: 0.2rem;
  background-color: #fff;
  color: #007bff;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: #6c757d;
    background-color: #e9ecef;
  }

  &:hover:not(:disabled) {
    background-color: #e9ecef;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); /* Ajusta el color del foco si es necesario */
  }
`;