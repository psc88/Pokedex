import { FC } from "react";
import { IButtonComponent } from "./buttonComponent.interface";
import {
  InnerPokeballCenter,
  PokeballBottom,
  PokeballButton,
  PokeballCenter,
  PokeballTop,
} from "./buttonComponent.styles";

export const ButtonComponent: FC<IButtonComponent> = ({ onClick }) => {
  return (
    <PokeballButton onClick={onClick}>
      <PokeballTop />
      <PokeballCenter>
        <InnerPokeballCenter />
      </PokeballCenter>
      <PokeballBottom />
    </PokeballButton>
  );
};
