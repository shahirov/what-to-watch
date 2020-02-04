import { takeLatest, put, fork, call, all } from 'redux-saga/effects'
import { AxiosError } from 'axios'

import {
  getMoviesRequest,
  getMoviesFailure,
  getMoviesSuccess,
  getPromoMovieRequest,
  getPromoMovieSuccess,
  getPromoMovieFailure,
  Movie
} from './slice'
import { api } from '../../api'
import { normalizeObjectKeys } from '../../utils/normalize-object-keys'

function* fetchMovies() {
  try {
    const response: { data: any[] } = yield call(api.get, '/films')
    const normalizedData = response.data.map(normalizeObjectKeys)
    yield put(getMoviesSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getMoviesFailure(error))
  }
}

function* fetchPromoMovie() {
  try {
    const response: { data: Movie } = yield call(api.get, '/films/promo')
    const normalizedData = normalizeObjectKeys(response.data)
    yield put(getPromoMovieSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getPromoMovieFailure(error))
  }
}

function* watchFetchMovies() {
  yield takeLatest(getMoviesRequest.type, fetchMovies)
}

function* watchFetchPromoMovie() {
  yield takeLatest(getPromoMovieRequest.type, fetchPromoMovie)
}

export function* moviesSaga() {
  yield all([fork(watchFetchMovies), fork(watchFetchPromoMovie)])
}
