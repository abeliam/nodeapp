import { connect, dispatch } from "react-redux"
import SignIn from "../components/SignIn"

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch({type: "AUTH__SIGNIN_REQUEST", payload: values})
  }
})


const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
