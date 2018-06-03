import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NotFoundWrapper = styled('section')`
    padding: 40px;
`

const NotFound = () => (
    <NotFoundWrapper>
        <h1>404 Page Not Found</h1>
        <p><NavLink to="/">back to home page</NavLink></p>
    </NotFoundWrapper>
)

export default NotFound
