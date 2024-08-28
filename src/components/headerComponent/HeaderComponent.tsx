import { FC } from "react"
import { SCFormContainer, SCHeader, SCHeaderContainer } from "./headerComponent.styles"
import { messages } from "../../constant/messages"
import { PokeIcon } from "../../images/PokeIcon"

export const HeaderComponent: FC = () => {
  return (
    <SCHeaderContainer>
      <SCHeader>
        <PokeIcon />
        <SCFormContainer>{messages.POKEDEX_TITLE}</SCFormContainer>
      </SCHeader>
    </SCHeaderContainer>
  )
}
