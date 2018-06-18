import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import DashboardIcon from "@material-ui/icons/Dashboard"
import PollIcon from "@material-ui/icons/Poll"
import PeopleIcon from "@material-ui/icons/People"
import MemoryIcon from "@material-ui/icons/Memory"

const StyledDashboardIcon = styled(DashboardIcon)`margin-right: 5px; font-size: 16px !important;`
const StyledPollIcon = styled(PollIcon)`margin-right: 5px; font-size: 16px !important;`
const StyledPeopleIcon = styled(PeopleIcon)`margin-right: 5px; font-size: 16px !important;`
const StyledMemoryIcon = styled(MemoryIcon)`margin-right: 5px; font-size: 16px !important;`

const SidebarContainer = styled("nav")`
    height: 100vh;
    width: 200px;
    background: #2A2C35;
    display: flex;
    flex-direction: column;
`

const SidebarHeader = styled("h1")`
    display: flex;
    align-items: center;
    color: #f5f5f5;
    font-size:25px;
    margin: 30px 0 20px;
    padding: 0 20px;
`

const SidebarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #cecece;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    &:hover {
        background: rgba(255,255,255,0.1);
    }
`

const Sidebar = ({className}) => (
    <SidebarContainer className={className}>
        <SidebarHeader>
            Dashboard
        </SidebarHeader>
        <SidebarLink to="/statistics">
            <StyledPollIcon/>Statistics
        </SidebarLink>
        <SidebarLink to="/users">
            <StyledPeopleIcon/>Users
        </SidebarLink>
        <SidebarLink to="/server">
            <StyledMemoryIcon/>Server
        </SidebarLink>
    </SidebarContainer>
)

export default Sidebar
