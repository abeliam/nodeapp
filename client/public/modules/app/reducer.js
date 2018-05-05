const flashReducer = (state, action) => {
  if (state === undefined) return { message: "" }

  switch (action.type) {
    case "MESSAGE":
      return {
        message: action.text
      }
  }
  return state
}

export default flashReducer
