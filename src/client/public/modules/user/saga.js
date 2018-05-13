import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from "../../api"
import history from "../../history"
import jwtDecode from "jwt-decode"

import { USER__FETCHUSER_REQUEST,
         USER__FETCHUSER_SUCCESS,
         USER__FETCHUSER_FAILURE } from "./actions"


function* fetchUser(action) {
  try {
    const token = jwtDecode(localStorage.getItem("token"))
    const response = yield api.get(`/user/${token.id}`)
    yield put({type: USER__FETCHUSER_SUCCESS, payload: response.data})
  } catch (e) {
    console.log("err", e)
    yield put({type: USER__FETCHUSER_FAILURE, message: e.message})
  }
}

function* userSaga() {
  yield takeLatest(USER__FETCHUSER_REQUEST, fetchUser)
  yield takeLatest(USER__FETCHUSER_REQUEST, fetchUser)
}

export default userSaga
