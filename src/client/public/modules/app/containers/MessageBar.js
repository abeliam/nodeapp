import { connect, dispatch } from "react-redux"
import MessageBar from "../components/MessageBar"

const mapStateToProps = state => ({
  message: state.flash.message
})

const mapDispatchToProps = (dispatch) => ({
  closeMessage: () => {
    dispatch({
      type: "MESSAGE",
      text: ""
    })
  }
})


const MessageBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBar)

export default MessageBarContainer
