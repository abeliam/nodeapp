import React from "react"
import { connect } from "react-redux"

import { LoginSection } from "../components/LoginSection"

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(values) {
    console.log(values)
  }
})

const LoginSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSection)

export default LoginSectionContainer
