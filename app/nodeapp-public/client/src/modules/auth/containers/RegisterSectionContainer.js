import React from "react"
import { connect } from "react-redux"

import RegisterSection from "../components/RegisterSection"

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(values) {
    console.log(values)
  }
})

const RegisterSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSection)

export default RegisterSectionContainer
