import React from "react"
import { Navbar, NavbarBrand, Icon, NavbarBurger, NavbarMenu, NavbarStart, NavbarDropdown, NavbarDivider, NavbarEnd, Field, Button, Control, NavbarLink } from "bloomer"
import { Link } from "react-router-dom"

const NavbarItem = ({href, children}) => (<Link to={href} className="navbar-item">{children}</Link>)

const MainNavbar = () => (
  <Navbar>
    <NavbarBrand>
      <NavbarItem href="/">
      <i className="fas fa-home"></i> My app
      </NavbarItem>
    </NavbarBrand>
    <NavbarMenu>
      <NavbarStart>
        <NavbarItem href='/'>Home</NavbarItem>
      </NavbarStart>
      <NavbarEnd>
        <NavbarItem href='/register'>Register</NavbarItem>
        <NavbarItem href='/login'>Login</NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)

export default MainNavbar
