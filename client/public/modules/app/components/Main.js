import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"
import MainNavbar from "./MainNavbar"

const Main = () => (
  <div id="app">
    <h1>Public site</h1>
    <MainNavbar/>
    <Switch>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)

export default Main
