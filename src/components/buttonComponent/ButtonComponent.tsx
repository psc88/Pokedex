import { FC } from 'react'

interface IButtonComponent {
  onClick: () => void
}

export const ButtonComponent: FC<IButtonComponent> = ({ onClick }) => {
  return (
    <div onClick={onClick}>Goo</div>
  )
}