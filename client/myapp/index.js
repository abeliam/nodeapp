import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import store from "./store"
import history from "./history"
import { IntlProvider } from "react-intl-redux"
import "babel-polyfill"

import Main from "./modules/app/containers/Main"

import "./modules/app/fonts/Cantarell-Regular.woff"

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        <Main/>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("appMountPoint")
)
