import { Navigate, Route, Routes } from "react-router-dom"
import { FC, PropsWithChildren } from "react"
import { PokedexMain } from "../containers"
import { PokedexDetail } from "../containers/pokedexDetail"

export const AppRouter: FC<PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<PokedexMain />} />
      <Route path="/pokemon/:pokeId" element={<PokedexDetail />} />
    </Routes>
  )
}
