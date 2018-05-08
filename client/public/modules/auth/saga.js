import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from "../../api"

function* signIn(action) {
  try {
    const response = yield api.post("/auth", action.payload)
    yield put({type: "AUTH__SIGNIN_SUCCESS"})
  } catch (e) {
    yield put({type: "AUTH__SIGNIN_FAILURE", message: e.message})
  }
}

function* signUp(action) {
  try {
    yield api.post("/user", action.payload)
    yield put({type: "AUTH__SIGNUP_SUCCESS"})
  } catch (e) {
    yield put({type: "AUTH__SIGNUP_FAILURE", message: e.message})
  }
}

function* authSaga() {
  yield takeLatest("AUTH__SIGNIN_REQUEST", signIn)
  yield takeLatest("AUTH__SIGNUP_REQUEST", signUp)
}

export default authSaga
