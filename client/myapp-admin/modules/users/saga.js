import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from "./action.types"
import api from "../../api"

function* fetchUser(action) {
    api.get()
}

function* usersSaga() {
  yield takeLatest(actions.FETCH_USERS_REQUEST, fetchUser)
}

export default usersSaga
