import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    const newRootReducer = require('./root-reducer').default
    store.replaceReducer(newRootReducer)
  })
}
