import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import flash from "./modules/app/reducer"

const rootReducer = combineReducers({
  flash,
  form
})

export default rootReducer
