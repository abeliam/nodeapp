import React from "react"
import {  NavLink } from "react-router-dom"
import TranslateIcon from "@material-ui/icons/Translate";

import { FormattedMessage } from "react-intl"

const LangageMenu = ({current, locales, setLocale}) => (
  <div id="langMenu">
    <a><TranslateIcon/></a>
    {
      locales.map((locale, index) => <a key={index} className={(locale == current)? "current" : ""} onClick={() => setLocale(locale)}>{locale}</a>)
    }
  </div>
)

const MainNavbar = ({authenticated, locale, locales, setLocale}) => (
  <nav id="mainNavbar" className="container">
    <NavLink exact to="/" activeClassName="active"><FormattedMessage id="app.home"/></NavLink>
    <div style={{flexGrow: 1}}></div>

    { authenticated && <NavLink to="/profile" activeClassName="active"><FormattedMessage id="app.profile"/></NavLink> }
    { authenticated && <NavLink to="/signout" activeClassName="active"><FormattedMessage id="app.signout"/></NavLink> }
    { !authenticated && <NavLink to="/signin" activeClassName="active"><FormattedMessage id="app.signin"/></NavLink> }
    { !authenticated && <NavLink to="/signup" activeClassName="active"><FormattedMessage id="app.signup"/></NavLink> }
    <LangageMenu current={locale} locales={locales} setLocale={setLocale}/>
  </nav>
)

export default MainNavbar
