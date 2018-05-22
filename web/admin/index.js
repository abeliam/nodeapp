import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./store"

import "./index.css"
import "typeface-gothic-a1"
import Main from "./modules/app/containers/Main"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("appMountPoint")
)
