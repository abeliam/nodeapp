import React from "react"
import { Link } from "react-router-dom"

const SignUp = () => (
  <section className="container">
    <h2>Sign Up</h2>
    <form id="signInForm">
      <div className="required field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>
      </div>
      <div className="required field">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="me@mail.com"/>
      </div>
      <div className="required field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </section>
)

export default SignUp
