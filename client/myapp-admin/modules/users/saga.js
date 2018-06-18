import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from "./action.types"
import api from "../../api"

function* fetchUser(action) {
    try {
        const response = yield api.get('/users')
        yield put(actions.fetchUsersSuccess(response.data))
    }
    catch (e) {
        console.log(e)
        yield put(actions.fetchUsersFailure())
    }

}

function* usersSaga() {
  yield takeLatest(actions.FETCH_USERS_REQUEST, fetchUser)
}

export default usersSaga
