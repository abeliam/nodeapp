import { APP__MESSAGE, APP__MESSAGECLOSE } from "./actions"

const flashReducer = (state, action) => {
  if (state === undefined) return []

  switch (action.type) {
    case APP__MESSAGE:
      return [...state, { text: action.text, className: action.className }]
    case APP__MESSAGECLOSE:
      return state.filter((message, id) => {
        return id !== action.id
      })
  }
  return state
}

export default flashReducer
