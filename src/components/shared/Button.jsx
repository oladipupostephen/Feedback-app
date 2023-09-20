import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isdisabled }) {
  return (
    <button type={type} disabled={isdisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
  isdisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isdisabled: PropTypes.bool,
};

export default Button;
