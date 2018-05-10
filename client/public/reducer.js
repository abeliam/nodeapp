import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import flash from "./modules/app/reducer"
import auth from "./modules/auth/reducer"

const rootReducer = combineReducers({
  flash,
  auth,
  form
})

export default rootReducer
