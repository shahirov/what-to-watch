import { all } from 'redux-saga/effects'

import { MoviesSagas } from '../features/movies/sagas'

export function* rootSaga() {
  yield all([...MoviesSagas])
}
