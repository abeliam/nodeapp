import React from "react"
import { Link } from "react-router-dom"

const SignIn = () => (
  <section className="container">
    <h2>Sign In</h2>
    <form id="signInForm">
      <div className="required field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>
      </div>
      <div className="required field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </section>
)

export default SignIn
