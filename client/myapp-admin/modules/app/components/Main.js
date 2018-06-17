import React from "react"
import { Route, Switch } from "react-router-dom"

import NotFound from "./NotFound"
import Sidebar from "../containers/Sidebar"
import Users from "../../users/containers/Users"
import styled from "styled-components"

const Main = ({className}) => (
    <div className={className} id="app">
        <Sidebar/>
        <Switch>
            <Route path="/users" component={Users}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
)

const StyledMain = styled(Main)`
    display: flex;
`

export default StyledMain
