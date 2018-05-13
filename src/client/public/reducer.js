import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import flash from "./modules/app/reducer"
import auth from "./modules/auth/reducer"
import user from "./modules/user/reducer"

const rootReducer = combineReducers({
  flash,
  auth,
  user,
  form
})

export default rootReducer
