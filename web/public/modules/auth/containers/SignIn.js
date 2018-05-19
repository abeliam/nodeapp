import { connect, dispatch } from "react-redux"
import SignIn from "../components/SignIn"
import authActions from "../actions"

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(authActions.signInRequest(values))
  }
})


const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
