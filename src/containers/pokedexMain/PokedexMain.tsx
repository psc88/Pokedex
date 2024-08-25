import { FC } from "react"
import { SCContainer } from "./PokedexMain.styles"
import { Header } from "../header"
import { ButtonComponent } from "../../components"

export const PokedexMain: FC = () => {
  return (
    <SCContainer>
      <Header/>
      <ButtonComponent
        onClick={() => console.log('Buscar')}
      />
    </SCContainer>
  )
}
