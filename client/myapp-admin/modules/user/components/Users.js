import React from 'react'
import styled from "styled-components"
import {Table} from "@nodeapp/ui-react"

const UsersWrapper = styled("section")`
    padding: 30px;
`

const TableData = styled("td")`
    border: 1px solid #717171;
    border-collapse: collapse;
    height: 1.8em;
    line-height: 1.8em;
    padding: 0 15px;
    text-align: left;
`

const TableHeaderData = styled("th")`
    border: 1px solid #717171;
    border-collapse: collapse;
    height: 1.8em;
    line-height: 1.8em;
    padding: 0 15px;
    text-align: left;
`

let User = ({username, email}) => (
    <tr>
        <TableData>{username}</TableData>
        <TableData>{email}</TableData>
        <TableData><a href="#">delete</a> / <a href="#">edit</a></TableData>
    </tr>
)


User = styled(User)`
    display: flex;
`

const Users = () => (
    <UsersWrapper>
        <h1>Users</h1>
        <Table>
            <thead>
                <tr>
                    <TableHeaderData>username</TableHeaderData>
                    <TableHeaderData>email</TableHeaderData>
                    <TableHeaderData>actions</TableHeaderData>
                </tr>
            </thead>
            <tbody>
                <User username="okok" email="azazaz@gmail.com"/>
                <User username="terterytrye" email="azazaz@gmail.com"/>
                <User username="yreyer" email="azazaz@gmail.com"/>
                <User username="okytryereyrok" email="azazaz@gmail.com"/>
            </tbody>

        </Table>
    </UsersWrapper>
)
export default Users
