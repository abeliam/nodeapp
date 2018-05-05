import { connect, dispatch } from "react-redux"
import SignIn from "../components/SignIn"



const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    console.log(values)
  }
})


const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
