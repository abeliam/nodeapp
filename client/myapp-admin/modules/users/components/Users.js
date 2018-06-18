import React from 'react'
import styled from "styled-components"
import {Table, TableHeader, TableCell, TableBody, TableRow, Button} from "@nodeapp/ui-react"
import Section from "../../app/components/Section"
import SectionHeader from "../../app/components/SectionHeader"

const UserRow = ({username, email}) => (
    <TableRow>
        <TableCell>{username}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>
            <Button type="primary">edit</Button>
            <Button type="failure">delete</Button>
        </TableCell>
    </TableRow>
)

class Users extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const {users, fetchUsers} = this.props
        return (
            <Section>
                <SectionHeader title="Users"/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>username</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map(
                            user => <UserRow key={user._id} username={user.username} email={user.email}/>
                        )}
                    </TableBody>
                </Table>
            </Section>
        )
    }
}


export default Users
