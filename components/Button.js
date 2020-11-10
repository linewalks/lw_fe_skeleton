import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: "button",
  onClick: () => {},
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
