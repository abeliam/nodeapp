import actions from "./action.types"

const initialState = () => []

const reducer = (state, action) => {
    if (state === undefined)
        return initialState()
    switch(action.type) {
        case actions.FETCH_USERS_SUCCESS:
            return action.payload
    }
    return state
}

export default reducer
