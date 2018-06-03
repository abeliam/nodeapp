import React from "react"
import { Link } from "react-router-dom"
import jdenticon from "jdenticon"

const UserData = ({label, children}) => (
  <div className="userData">
    <div className="userDataLabel"><h3>{label}</h3></div>
    <div className="userDataContent">{children}</div>
  </div>
)

const username = "John"
const email = "john@doe"

class Profile extends React.Component {
  componentDidUpdate() {
    console.log("did")
    jdenticon.update(`#avatar-${this.props.user._id}-${this.props.user.username}`, this.props.user._id)
  }

  render() {
    console.log("done")
    const {user, messages} = this.props
    return (
      <section className="container">
        <h2>Profile</h2>
        <svg id={`avatar-${this.props.user._id}-${this.props.user.username}`} width="80" height="80">
          Please update your browser
        </svg>
        <UserData label={messages["auth.username"]}>
          <p>{user.username}</p>
        </UserData>
        <UserData label={messages["auth.email"]}>
          <p>{user.email}</p>
        </UserData>
      </section>
    )
  }
}

export default Profile
