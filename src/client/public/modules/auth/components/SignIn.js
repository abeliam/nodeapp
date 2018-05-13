import React from "react"
import { Link } from "react-router-dom"
import { reduxForm, Field } from "redux-form"

import InputField from "../../../elements/form/InputField"

const SignIn = ({handleSubmit}) => (
  <section className="container">
    <h2>Sign In</h2>
    <form id="signInForm" onSubmit={handleSubmit}>
      <Field name="username" label="Username" component={InputField} type="text" />
      <Field name="password" label="Password" component={InputField} type="password" />
      <button type="submit">Sign In</button>
    </form>
  </section>
)

export default reduxForm({
  form: "signin"
})(SignIn)
