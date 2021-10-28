import React from "react";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import Text from "../Text";

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
              <Text variant="smallestException" tag="a">
                {link.texto}
              </Text>
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
