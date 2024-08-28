import { FC } from "react"
import { SCFormContainer, SCHeader, SCHeaderContainer } from "./header.styles"
import { messages } from "../../constant/messages"
import { PokeIcon } from "../../images/PokeIcon"
import { IHeader } from "./header.interface"

export const Header: FC<IHeader> = ({
  handleButtonBackToHome
}) => {
  return (
    <SCHeaderContainer>
      <SCHeader onClick={handleButtonBackToHome}>
        <PokeIcon />
        <SCFormContainer>{messages.POKEDEX_TITLE}</SCFormContainer>
      </SCHeader>
    </SCHeaderContainer>
  )
}
