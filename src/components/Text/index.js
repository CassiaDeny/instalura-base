import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextBase = styled.span`
  ${({ variant, theme }) => {
    const typoTheme = theme.typographyVariants[variant];

    return css`
      font-size: ${typoTheme.fontSize};
      font-weight: ${typoTheme.fontWeight};
      line-height: ${typoTheme.lineHeight};
    `;
  }}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase variant={variant} as={tag}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
