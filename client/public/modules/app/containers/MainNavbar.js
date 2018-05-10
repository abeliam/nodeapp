import { connect, dispatch } from "react-redux"
import MainNavbar from "../components/MainNavbar"

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = (dispatch) => ({

})


const MainNavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavbar)

export default MainNavbarContainer
