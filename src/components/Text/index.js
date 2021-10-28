import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { propToStyle } from "../../theme/utils/propToStyle";

const TextBase = styled.span`
  ${({ variant, theme }) => {
    return theme.typographyVariants[variant];
  }}

  ${propToStyle("textAlign")}
`;
export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase variant={variant} as={tag} {...props}>
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
