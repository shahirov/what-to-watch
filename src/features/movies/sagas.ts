import { takeLatest, put, fork } from 'redux-saga/effects'

import { api } from '../../api'
import { getMoviesRequest, getMoviesFailure, getMoviesSuccess } from './slice'
import { renameKeysToCamelCase } from '../../utils/keysToCamelCase'

function* fetchMovies() {
  try {
    const { data }: { data: any[] } = yield api.get('/films')
    const formatedData = yield data.map(renameKeysToCamelCase)
    yield put(getMoviesSuccess(formatedData))
  } catch (err) {
    yield put(getMoviesFailure(err))
  }
}

function* watchFetchMovies() {
  yield takeLatest(getMoviesRequest.type, fetchMovies)
}

export const MoviesSagas = [fork(watchFetchMovies)]
