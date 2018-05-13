import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from "../../api"
import history from "../../history"

function* signIn(action) {
  try {
    const response = yield api.post("/auth", action.payload)
    localStorage.setItem("token", response.data.token)
    history.push("/")
    yield put({type: "MESSAGE", text: "Signed in"})
    yield put({type: "AUTH__SIGNIN_SUCCESS"})
  } catch (e) {
    yield put({type: "MESSAGE", text: "Invalid username or password"})
    yield put({type: "AUTH__SIGNIN_FAILURE", message: e.message})
  }
}

function* signUp(action) {
  try {
    yield api.post("/user", action.payload)
    yield put({type: "MESSAGE", text: "failure"})
    yield put({type: "MESSAGE", text: "Signed up"})
    yield put({type: "AUTH__SIGNUP_SUCCESS"})
  } catch (e) {
    yield put({type: "MESSAGE", text: "Invalid"})
    yield put({type: "AUTH__SIGNUP_FAILURE", message: e.message})
  }
}

function* signOut(action) {
  try {
    localStorage.removeItem("token")
    yield put({type: "AUTH__SIGNOUT_SUCCESS"})
  } catch (e) {
    yield put({type: "AUTH__SIGNOUT_FAILURE", message: e.message})
  }
}

function* authSaga() {
  yield takeLatest("AUTH__SIGNIN_REQUEST", signIn)
  yield takeLatest("AUTH__SIGNUP_REQUEST", signUp)
  yield takeLatest("AUTH__SIGNOUT_REQUEST", signOut)
}

export default authSaga