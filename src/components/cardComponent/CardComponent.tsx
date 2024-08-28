import { FC } from "react"
import { SCCardContainer, SCLabelCard, SCNumber, SCScrollableContainer } from "./cardComponent.styles"
import { background, PokeTypes } from "../../utils/BackgroundsByType"
import { ICardComponent } from "./cardComponent.interface"
import { useNavigate } from "react-router-dom"

export const CardComponent: FC<ICardComponent> = ({ pokemonsList }) => {
  const navigate = useNavigate()
  const handleCardClick = (id: number) => {
    navigate(`/pokemon/${id}`)
  }
  return (
    <SCScrollableContainer>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-4">
        {pokemonsList.map((item, indexItem: number) => {
          const mainType: PokeTypes = item.types[0]
          const color = background[mainType]
          return (
            <div
              className="col"
              key={`${item.name}-${indexItem}`}
              onClick={() => handleCardClick(item.id)}
            >
              <SCCardContainer
                borderColor={color}
                className="card h-100 shadow-sm rounded"
              >
                <SCNumber color={color}>
                  #{item.id.toString().padStart(3, "0")}
                </SCNumber>
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <SCLabelCard color={color}>
                  <span>{item.name}</span>
                </SCLabelCard>
              </SCCardContainer>
            </div>
          )
        })}
      </div>
    </SCScrollableContainer>
  )
}
