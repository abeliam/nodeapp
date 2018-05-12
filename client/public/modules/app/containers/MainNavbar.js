import { connect, dispatch } from "react-redux"
import MainNavbar from "../components/MainNavbar"
import { withRouter } from 'react-router'

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = (dispatch) => ({

})


const MainNavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavbar)

export default withRouter(MainNavbarContainer)
