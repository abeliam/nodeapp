import React from "react"
import {  NavLink } from "react-router-dom"

const LangageMenu = ({current, locales, setLocale}) => (
  <div id="langMenu">
    <a>{current}</a>
    {
      locales.filter(locale => locale != current)
             .map((locale, index) => <a key={index} onClick={() => setLocale(locale)} href={`#${locale}`}>{locale}</a>)
    }
  </div>
)

const MainNavbar = ({authenticated, locale, locales, setLocale}) => (
  <nav id="mainNavbar" className="container">
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <div style={{flexGrow: 1}}></div>

    { authenticated && <NavLink to="/profile" activeClassName="active">Profile</NavLink> }
    { authenticated && <NavLink to="/signout" activeClassName="active">Sign Out</NavLink> }
    { !authenticated && <NavLink to="/signin" activeClassName="active">Sign In</NavLink> }
    { !authenticated && <NavLink to="/signup" activeClassName="active">Sign Up</NavLink> }
    <LangageMenu current={locale} locales={locales} setLocale={setLocale}/>
  </nav>
)

export default MainNavbar
