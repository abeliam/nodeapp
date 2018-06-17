import { fork } from "redux-saga/effects"
import usersSaga from "./modules/users/saga"

function* rootSaga() {
  yield fork(usersSaga)
}

export default rootSaga
