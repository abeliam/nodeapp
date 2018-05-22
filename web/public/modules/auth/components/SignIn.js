import React from "react"
import { Link } from "react-router-dom"
import { reduxForm, Field } from "redux-form"

import InputField from "../../../elements/form/InputField"

const SignIn = ({handleSubmit, messages}) => (
  <section className="container">
    <h2>{messages["app.signin"]}</h2>
    <form id="signInForm" onSubmit={handleSubmit}>
      <Field name="username" label={messages["auth.username"]} component={InputField} type="text" />
      <Field name="password" label={messages["auth.password"]} component={InputField} type="password" />
      <button type="submit">{messages["app.signin"]}</button>
    </form>
  </section>
)

export default reduxForm({
  form: "signin"
})(SignIn)
