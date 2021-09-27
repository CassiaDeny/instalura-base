import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import TextBase from "../Text";

const links = [
  { texto: "Home", url: "/" },
  { texto: "Perguntas frequentes", url: "/faq" },
  { texto: "Sobre", url: "/sobre" },
];

export default function Menu(props) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <TextBase variant="smallestException" tag="a">
                {link.texto}
              </TextBase>
            </li>
          );
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <Button ghost>Entrar</Button>
        <Button>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
