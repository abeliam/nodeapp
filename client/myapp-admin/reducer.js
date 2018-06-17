import { combineReducers } from "redux"
import users from "./modules/users/reducer"

const rootReducer = combineReducers({
    users
})

export default rootReducer
