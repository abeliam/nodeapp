import React from "react"
import { Link } from "react-router-dom"
import InputField from "../../../elements/form/InputField"
import { reduxForm, Field } from "redux-form"
import validate from "redux-form-with-ajv"
import UserCredentials from "@nodeapp/schemas/UserCredentials"

const SignUp = ({handleSubmit}) => (
  <section className="container">
    <h2>Sign Up</h2>
    <form id="signInForm" onSubmit={handleSubmit}>
      <Field required="true" name="username" label="Username" component={InputField} type="text" />
      <Field required="true" name="email" label="Email" placeholder="name@example.com" component={InputField} type="text" />
      <Field required="true" name="password" label="Password" component={InputField} type="password" />
      <button type="submit">Sign Up</button>
    </form>
  </section>
)

export default reduxForm({
  form: "signup",
  validate: validate(UserCredentials)
})(SignUp)
