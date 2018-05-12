import { fork } from "redux-saga/effects"
import authSaga from "./modules/auth/saga"
import userSaga from "./modules/user/saga"

function* rootSaga() {
  yield [
    fork(authSaga),
    fork(userSaga)
  ]
}

export default rootSaga
