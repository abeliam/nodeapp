import React from "react"
import { Link } from "react-router-dom"

const UserData = ({label, children}) => (
  <div className="userData">
    <div className="userDataLabel"><h3>{label}</h3></div>
    <div className="userDataContent">{children}</div>
  </div>
)

const username = "John"
const email = "john@doe"

const Profile = ({handleSubmit, user}) => (
  <section className="container">
    <h2>Profile</h2>
    <UserData label="Username">
      <p>{user.username}</p>
    </UserData>
    <UserData label="Email">
      <p>{user.email}</p>
    </UserData>
  </section>
)

export default Profile
