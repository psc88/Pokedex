import { FC } from "react"
import { SCFormContainer, SCLogo } from "./header.styles"
import { LogoPokemon } from "../../images/LogoPokemon"
import { messages } from "../../constant/messages"

interface IHeader {
  handleSearch: () => void
}

export const Header: FC<IHeader> = ({ handleSearch }) => {
  return (
    <nav className="navbar bg-warning">
      <div className="container-fluid">
        <SCLogo className="navbar-brand">
          <LogoPokemon/>
        </SCLogo>
        <SCFormContainer>
          <input
            type="search"
            placeholder={messages.placeHolderSearch}
            aria-label={messages.placeHolderSearch}
          />
        </SCFormContainer>
      </div>
    </nav>
  )
}
