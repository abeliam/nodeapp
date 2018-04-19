import user from '@actions/user.types'

const initialUserState = {}

const userReducer = (state, action) => {
  if (state === undefined) return initialUserState

  switch (action.type) {
    case user.UPDATE_USER_DATA:
      return Object.assign({}, action.data)

    default:
      return state
  }
}

export default userReducer
