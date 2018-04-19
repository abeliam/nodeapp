import React from "react"
import { Route, Switch } from "react-router-dom"

import "bulma/css/bulma.css"

import "@fortawesome/fontawesome"
import "@fortawesome/fontawesome-free-solid"
import "@fortawesome/fontawesome-free-regular"

import MainNavbar from "./MainNavbar"
import Hero from "./Hero"
import NotFound from "./NotFound"

// Authentication
import LoginSection from "../../auth/components/LoginSection"
import RegisterSectionContainer from "../../auth/containers/RegisterSectionContainer"

const Main = () => (
  <div id="app">
		<MainNavbar />

    <Switch>
      <Route exact path="/" component={Hero}/>

      <Route path="/login" component={LoginSection}/>
      <Route path="/register" component={RegisterSectionContainer}/>

      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)

export default Main
