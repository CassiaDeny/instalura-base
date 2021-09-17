import styled, { css } from "styled-components";

const applyTheme = ({ ghost, theme: { colors } }) => {
  const ButtonDefault = css`
    color: ${colors.primary.main.contrastText};
    background-color: ${colors.primary.main.color};
  `;

  const ButtonGhost = css`
    color: ${colors.secondary.main.color};
    background-color: ${colors.secondary.main.contrastText};
  `;

  return ghost ? ButtonGhost : ButtonDefault;
};

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${applyTheme}
`;
