import React from "react"
import { Link } from "react-router-dom"
import InputField from "../../../elements/form/InputField"
import { reduxForm, Field } from "redux-form"
import validate from "redux-form-with-ajv"
import UserCredentials from "@nodeapp/schemas/UserCredentials"

const SignUp = ({handleSubmit, messages}) => (
  <section className="container">
    <h2>{messages["app.signup"]}</h2>
    <form id="signInForm" onSubmit={handleSubmit}>
      <Field required="true" name="username" label={messages["auth.username"]} component={InputField} type="text" />
      <Field required="true" name="email" label={messages["auth.email"]} placeholder="name@example.com" component={InputField} type="text" />
      <Field required="true" name="password" label={messages["auth.password"]} component={InputField} type="password" />
      <button type="submit">{messages["app.signup"]}</button>
    </form>
  </section>
)

export default reduxForm({
  form: "signup",
  validate: validate(UserCredentials)
})(SignUp)
