import { connect, dispatch } from "react-redux"
import SignUp from "../components/SignUp"

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch({type: "AUTH__SIGNUP_REQUEST", payload: values})
  }
})

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default SignUpContainer
