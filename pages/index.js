import React from "react";
import { Button } from "../src/components/Button";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import Text from "../src/components/Text";

export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu></Menu>
      <div>
        <Text tag="h1" variant="title" textAlign={{ xs: "center", md: "left" }}>
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          tag="p"
          variant="paragraph1"
          textAlign={{ xs: "center", md: "left" }}
        >
          Lorem Ipsum is simple dummy text of the printing and typesetting Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text>
        <Button margin={{ xs: "auto", md: "initial" }} display="block">
          Cadastrar
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
}
