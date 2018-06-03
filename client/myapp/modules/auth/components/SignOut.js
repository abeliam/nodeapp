import React from "react"

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut()
  }
  render() {
    return <div></div>
  }
}

export default SignOut
