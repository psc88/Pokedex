import { FC } from "react"

interface IButtonComponent {
  onClick: () => void
}

export const ButtonComponent: FC<IButtonComponent> = ({ onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Buscar Pokemons
    </button>
  )
}
