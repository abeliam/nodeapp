import { connect, dispatch } from "react-redux"
import Messages from "../components/Messages"
import message from "../actions"

const mapStateToProps = state => ({
  messages: state.flash
})

const mapDispatchToProps = (dispatch) => ({
  closeMessage: (i) => {
    dispatch(message.close(i))
  }
})


const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default MessagesContainer
