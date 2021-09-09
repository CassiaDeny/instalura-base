import styled from "styled-components";

export const MenuWrapper = styled.nav`
  font-family: "Rubik", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuWrapper.LeftSide = styled.nav`
  padding: 0px;
  margin: 0px;
  order: 1;
`;

MenuWrapper.CenterSide = styled.nav`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #99989e;
  padding: 12px;
  a {
      text-align: center;
        display: block;
        text-decoration: nome;
        color #88989E;
        transition: 200ms ease-in-out;
        &:hover,
        &:focus {
            font-weight: 500;
            color: #070C0E;
        }
  }
`;

MenuWrapper.RightSide = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;
