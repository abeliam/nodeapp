import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"
import MainNavbar from "./MainNavbar"
import Home from "./Home"
import SignIn from "../../auth/containers/SignIn"
import SignUp from "../../auth/containers/SignUp"

const Main = () => (
  <div id="app">
    <div className="container">
      <h1>Nodeapp</h1>
    </div>
    <MainNavbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)

export default Main
