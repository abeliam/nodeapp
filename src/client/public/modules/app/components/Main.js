import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"
import MainNavbar from "../containers/MainNavbar"
import MessageBar from "../containers/MessageBar"
import Home from "./Home"
import SignIn from "../../auth/containers/SignIn"
import SignUp from "../../auth/containers/SignUp"
import SignOut from "../../auth/containers/SignOut"
import Profile from "../../user/containers/Profile"

const Main = () => (
  <div id="app">
    <div className="container">
      <h1>Nodeappl</h1>
    </div>
    <MainNavbar/>
    <MessageBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signout" component={SignOut}/>
      <Route path="/profile" component={Profile}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)

export default Main
