import { FC } from "react"

interface ICardComponent {
  pokemonsList: any[]
}

export const CardComponent: FC<ICardComponent> = ({ pokemonsList }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {pokemonsList.map((item, indexItem: number) => (
        <div className="col" key={`${item.name}-${indexItem}`}>
          <div className="card h-100 shadow p-3 mb-5 rounded">
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}