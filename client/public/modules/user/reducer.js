import { USER__FETCHUSER_SUCCESS } from "./actions"

const authReducer = (state, action) => {
  if (state === undefined) return { username: "undefined" }

  switch (action.type) {
    case USER__FETCHUSER_SUCCESS:
      return action.payload
  }
  return state
}

export default authReducer
