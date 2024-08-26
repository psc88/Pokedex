import { FC } from "react"
import { FooterText, SCFooterContainer } from "./footer.styles"

export const Footer: FC = () => {
  return (
    <SCFooterContainer>
      <FooterText>&copy 2024 Todos los derechos reservados</FooterText>
    </SCFooterContainer>
  )
}
