export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (payload) => ({
    type: FETCH_USERS_SUCCESS,
    payload
})

export const fetchUsersFailure = () => ({
    type: FETCH_USERS_FAILURE
})

export default {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure
}
