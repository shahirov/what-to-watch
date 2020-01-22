import { takeLatest, put, fork } from 'redux-saga/effects'

import { api } from '../../api'
import { getMoviesRequest, getMoviesFailure, getMoviesSuccess } from './slice'

function* fetchMovies() {
  try {
    const { data } = yield api.get('/films')
    yield put(getMoviesSuccess(data))
  } catch (err) {
    yield put(getMoviesFailure(err))
  }
}

function* watchFetchMovies() {
  yield takeLatest(getMoviesRequest.type, fetchMovies)
}

export const MoviesSagas = [fork(watchFetchMovies)]
