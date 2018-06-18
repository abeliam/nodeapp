import React from "react"

const style = {
    flexGrow: 1,
    padding: "40px"
}

const Section = ({children}) => (
    <section style={style}>
        {children}
    </section>
)

export default Section
