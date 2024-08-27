import Lottie from "lottie-react";
import { FC } from "react";
import animationData from "../../utils/animatePokemon.json";

export const LoadingComponent: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: 200, height: 200 }}
      />
      <div>Buscando Pokemons...</div>
    </div>
  );
};
