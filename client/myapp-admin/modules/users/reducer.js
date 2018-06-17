
const initialState = () => []

const reducer = (state, action) => {
    if (state === undefined)
        return initialState()
    return state
}

export default reducer
