import React from "react"
import { NavLink } from "react-router-dom"

const MainNavbar = () => (
  <nav id="mainNavbar" class="container">
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/signin">Sign In</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
  </nav>
)

export default MainNavbar
