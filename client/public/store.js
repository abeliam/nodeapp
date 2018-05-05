import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import saga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,
                          applyMiddleware(logger,
                                          sagaMiddleware))
sagaMiddleware.run(saga)

export default store
