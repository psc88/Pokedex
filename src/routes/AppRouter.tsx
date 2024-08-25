import { Navigate, Route, Routes } from "react-router-dom";
import { PokedexMain } from "../containers/pokedexMain";
import { FC, PropsWithChildren } from "react"

export const AppRouter: FC<PropsWithChildren> = () => {
  return (
    <Routes>
      <Route path="/home" element={<PokedexMain />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
