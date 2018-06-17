import Users from "../components/Users"
import { connect } from "react-redux"
import actions from "../action.types"

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers() {
        dispatch({type: actions.FETCH_USERS_REQUEST})
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
