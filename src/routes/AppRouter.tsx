import { Navigate, Route, Routes } from "react-router-dom"
import { FC, PropsWithChildren } from "react"
import { ItemPokemon, PokedexMain } from "../containers"

export const AppRouter: FC<PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="/pokemon" element={<PokedexMain />} />
      <Route path="/pokemon/:name" element={<PokedexMain />} />
      <Route path="/item" element={<ItemPokemon />} />
      <Route path="/" element={<Navigate to="/pokemon" />} />
    </Routes>
  )
}
