import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type,
  children
}) => React.createElement("button", {
  className: `${type} button`
}, children);

Button.propTypes = {
  type: PropTypes.string
};
export default Button;