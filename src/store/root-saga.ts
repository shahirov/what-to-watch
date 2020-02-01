import { all, fork } from 'redux-saga/effects'

import { userSagas } from '../features/authentication/sagas'
import { moviesSaga } from '../features/movies/sagas'

export function* rootSaga() {
  yield all([fork(moviesSaga), fork(userSagas)])
}
