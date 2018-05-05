import { fork } from "redux-saga/effects"
import authSaga from "./modules/auth/saga"

function* rootSaga() {
  yield [
    fork(authSaga)
  ]
}

export default rootSaga
