import { AUTH__SIGNIN_SUCCESS, AUTH__SIGNOUT_SUCCESS } from "./actions"

const authReducer = (state, action) => {
  if (state === undefined) return { authenticated: !!localStorage.getItem("token") }

  switch (action.type) {
    case AUTH__SIGNIN_SUCCESS:
      return {
        authenticated: true
      }
    case AUTH__SIGNOUT_SUCCESS:
      return {
        authenticated: false
      }
  }
  return state
}

export default authReducer
