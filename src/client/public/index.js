import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import store from "./store"
import history from "./history"
import "babel-polyfill"

import Main from "./modules/app/components/Main"

import "./modules/app/fonts/Cantarell-Regular.woff"

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main/>
    </Router>
  </Provider>,
  document.getElementById("appMountPoint")
)
