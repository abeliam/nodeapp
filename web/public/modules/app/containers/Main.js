import { connect, dispatch } from "react-redux"
import Main from "../components/Main"
import { withRouter } from 'react-router'
import { USER__FETCHUSER_REQUEST } from "../../user/actions"

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserData() {
    dispatch({
      type: USER__FETCHUSER_REQUEST,
      payload: localStorage.getItem("token")
    })
  }
})


const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default withRouter(MainContainer)
