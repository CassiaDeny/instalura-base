import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled.h2`
  font-size: 25px;
  color: magenta;
`;

export default function Home() {
  return (
    <>
      <Title>Página da Cássia</Title>
      <SubTitle>Meu conteúdo</SubTitle>
    </>
  );
}
