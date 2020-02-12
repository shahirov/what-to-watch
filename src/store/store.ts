import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...getDefaultMiddleware(), sagaMiddleware, routerMiddleware(history)]
})

sagaMiddleware.run(rootSaga)
