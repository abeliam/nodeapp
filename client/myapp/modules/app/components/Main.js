import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"
import MainNavbar from "../containers/MainNavbar"
import Messages from "../containers/Messages"
import Home from "./Home"
import SignIn from "../../auth/containers/SignIn"
import SignUp from "../../auth/containers/SignUp"
import SignOut from "../../auth/containers/SignOut"
import Profile from "../../user/containers/Profile"

import AppsIcon from "@material-ui/icons/Apps";

import { FormattedMessage } from "react-intl"

class Main extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="container">
          <h1><AppsIcon/> <FormattedMessage id="app.title"/></h1>
        </div>
        <MainNavbar/>
        <Messages/>
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
  }

  componentDidMount() {
    if (this.props.authenticated) {
      this.props.fetchUserData()
    }
  }
}

export default Main
