import React from "react"
import {  NavLink } from "react-router-dom"

const MainNavbar = ({authenticated}) => (
  <nav id="mainNavbar" className="container">
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <div style={{flexGrow: 1}}></div>

    { authenticated && <NavLink to="/profile" activeClassName="active">Profile</NavLink> }
    { authenticated && <NavLink to="/signout" activeClassName="active">Sign Out</NavLink> }
    { !authenticated && <NavLink to="/signin" activeClassName="active">Sign In</NavLink> }
    { !authenticated && <NavLink to="/signup" activeClassName="active">Sign Up</NavLink> }
  </nav>
)

export default MainNavbar
