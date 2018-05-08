// Action types
export const AUTH__SIGNIN_REQUEST = "AUTH__SIGNIN_REQUEST"
export const AUTH__SIGNIN_SUCCESS = "AUTH__SIGNIN_SUCCESS"
export const AUTH__SIGNIN_FAILURE = "AUTH__SIGNIN_FAILURE"

export const AUTH__SIGNUP_REQUEST = "AUTH__SIGNUP_REQUEST"
export const AUTH__SIGNUP_SUCCESS = "AUTH__SIGNUP_SUCCESS"
export const AUTH__SIGNUP_FAILURE = "AUTH__SIGNUP_FAILURE"

export default {
  signInRequest(payload) {
    return {
      type: AUTH__SIGNIN_REQUEST,
      payload
    }
  }
}
