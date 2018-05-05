import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./store"


import Main from "./modules/app/components/Main"

import "./modules/app/fonts/Cantarell-Regular.woff"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("appMountPoint")
)
