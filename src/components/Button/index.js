import styled, { css } from "styled-components";
import { typographyVariants } from "../../theme/Typografy";
import { breakpointsMedia } from "../../theme/utils/breakpointsMedia";
import { propToStyle } from "../../theme/utils/propToStyle";

const applyChangesByType = ({ ghost, theme: { colors } }) => {
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
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${applyChangesByType}
  ${propToStyle("margin")}
  ${propToStyle("display")}
  ${breakpointsMedia({
    xs: css`
      ${typographyVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${typographyVariants.paragraph1}
    `,
  })}
`;
