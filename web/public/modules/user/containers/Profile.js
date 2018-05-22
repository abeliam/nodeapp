import { connect, dispatch } from "react-redux"
import Profile from "../components/Profile"

const mapStateToProps = state => ({
  user: state.user,
  messages: state.intl.messages
})

const mapDispatchToProps = (dispatch) => ({

})


const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfileContainer
