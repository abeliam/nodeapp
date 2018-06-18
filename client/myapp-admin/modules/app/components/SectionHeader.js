import React from "react"
import PropTypes from "prop-types"

const style = {
    background: "#f1f1f1",
    padding: "20px",
    marginBottom: "2em"
}

const SectionHeader = ({title, children}) => (
    <header style={style}>
        <h1 style={{margin: 0}}>{title}</h1>
        {children}
    </header>
)

SectionHeader.propTypes = {
    title: PropTypes.string
}

export default SectionHeader
