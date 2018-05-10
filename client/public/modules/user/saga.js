import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from "../../api"
import history from "../../history"

function* fetchUser(action) {
  try {
    const response = yield api.post("/user", action.payload)

    yield put({type: "USER__FETCHUSER_SUCCESS"})
  } catch (e) {
    yield put({type: "USER__FETCHUSER_FAILURE", message: e.message})
  }
}

function* userSaga() {

}

export default userSaga
