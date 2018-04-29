import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"

const Main = () => (
  <div id="app">
    <h1>Public site</h1>
    <Switch>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)

export default Main
