import PropTypes from "prop-types";
import React from "react";

import ButtonStyled from "./Button.styled";

const Button = props => {
  const { children, shouldRender, ...rest } = props;

  if (!shouldRender) {
    return null;
  }

  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  shouldRender: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["button", "submit"]),
  uppercase: PropTypes.bool
};

Button.defaultProps = {
  children: undefined,
  color: undefined,
  disabled: false,
  fullWidth: false,
  outline: true,
  primary: false,
  secondary: false,
  shouldRender: true,
  size: undefined,
  type: "button",
  uppercase: false
};

export default Button;
