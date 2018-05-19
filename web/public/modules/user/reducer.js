import { USER__FETCHUSER_SUCCESS,
         USER__CLEANDATA } from "./actions"

const authReducer = (state, action) => {
  if (state === undefined) return {}

  switch (action.type) {
    case USER__FETCHUSER_SUCCESS:
      return action.payload
    case USER__CLEANDATA:
      return {}
  }
  return state
}

export default authReducer
