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
import { renameKeysToCamelCase } from '../../utils/keys-to-camel-case'

function* fetchMovies() {
  try {
    const response: { data: any[] } = yield call(api.get, '/films')
    const formatedData = yield response.data.map(renameKeysToCamelCase)
    yield put(getMoviesSuccess(formatedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getMoviesFailure(error))
  }
}

function* fetchPromoMovie() {
  try {
    const response: { data: Movie } = yield call(api.get, '/films/promo')
    const formatedData = yield renameKeysToCamelCase(response.data)
    yield put(getPromoMovieSuccess(formatedData))
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
