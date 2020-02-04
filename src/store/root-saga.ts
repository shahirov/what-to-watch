import { all, fork } from 'redux-saga/effects'

import { userSagas } from '../features/user/sagas'
import { moviesSaga } from '../features/movies/sagas'

export function* rootSaga() {
  yield all([fork(userSagas), fork(moviesSaga)])
}
