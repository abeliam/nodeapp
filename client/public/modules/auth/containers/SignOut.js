import { connect, dispatch } from "react-redux"
import SignOut from "../components/SignOut"
import authActions from "../actions"

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(authActions.signOutRequest())
  }
})


const SignOutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut)

export default SignOutContainer
