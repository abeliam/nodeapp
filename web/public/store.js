import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import saga from "./saga"
import { addLocaleData } from "react-intl"
import frdata from "react-intl/locale-data/fr"
import endata from "react-intl/locale-data/en"
import en from "@nodeapp/intl/en"

addLocaleData([...endata, ...frdata]);
const sagaMiddleware = createSagaMiddleware()

const initialState = {
  intl: {
    locale: "en",
    messages: en,
  }
}

const store = createStore(reducer,
                          initialState,
                          applyMiddleware(logger,
                                          sagaMiddleware))

sagaMiddleware.run(saga)

export default store
