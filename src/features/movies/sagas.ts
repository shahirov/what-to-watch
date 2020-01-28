import { takeLatest, put, fork } from 'redux-saga/effects'

import { api } from '../../api'
import { AxiosError } from 'axios'
import { renameKeysToCamelCase } from '../../utils/keys-to-camel-case'
import { getMoviesRequest, getMoviesFailure, getMoviesSuccess } from './slice'

function* fetchMovies() {
  try {
    const { data }: { data: any[] } = yield api.get('/films')
    const formatedData = yield data.map(renameKeysToCamelCase)
    yield put(getMoviesSuccess(formatedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getMoviesFailure(error))
  }
}

function* watchFetchMovies() {
  yield takeLatest(getMoviesRequest.type, fetchMovies)
}

export const MoviesSagas = [fork(watchFetchMovies)]
