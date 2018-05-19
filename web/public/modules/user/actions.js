// Action types
export const USER__FETCHUSER_REQUEST = "USER__FETCHUSER_REQUEST"
export const USER__FETCHUSER_SUCCESS = "USER__FETCHUSER_SUCCESS"
export const USER__FETCHUSER_FAILURE = "USER__FETCHUSER_FAILURE"
export const USER__CLEANDATA = "USER__CLEANDATA"

export default {
  fetchUserRequest(payload) {
    return {
      type: USER__FETCHUSER_REQUEST,
      payload
    }
  }
}
