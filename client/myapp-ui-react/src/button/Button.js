import React from "react"
import PropTypes from "prop-types"

const Button = ({type, children}) => (
    <button className={`${type} button`}>
        {children}
    </button>
)

Button.propTypes = {
    type: PropTypes.string
}

export default Button
