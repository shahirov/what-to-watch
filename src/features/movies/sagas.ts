import { takeEvery, put, fork, call, all, select } from 'redux-saga/effects'
import { AxiosError, AxiosResponse } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import {
  getMoviesRequest,
  getMoviesFailure,
  getMoviesSuccess,
  getPromoMovieRequest,
  getPromoMovieSuccess,
  getPromoMovieFailure,
  getFavoriteMoviesRequest,
  getFavoriteMoviesFailure,
  getFavoriteMoviesSuccess,
  toggleFavoriteMovieRequest,
  toggleFavoriteMovieSuccess,
  toggleFavoriteMovieFailure,
  Movie
} from './slice'
import { api } from '../../api'
import { selectFavoriteMovieById } from './selectors'
import { normalizeObjectKeys } from '../../utils/normalize-object-keys'

function* fetchMovies() {
  try {
    const response: AxiosResponse<Movie[]> = yield call(api.get, '/films')
    const normalizedData = response.data.map(normalizeObjectKeys)
    yield put(getMoviesSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getMoviesFailure(error))
  }
}

function* fetchPromoMovie() {
  try {
    const response: AxiosResponse<Movie> = yield call(api.get, '/films/promo')
    const normalizedData = normalizeObjectKeys(response.data)
    yield put(getPromoMovieSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getPromoMovieFailure(error))
  }
}

function* fetchFavoriteMovies() {
  try {
    const response: AxiosResponse<Movie[]> = yield call(api.get, '/favorite')
    const normalizedData = yield response.data.map(normalizeObjectKeys)
    yield put(getFavoriteMoviesSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(getFavoriteMoviesFailure(error))
  }
}

function* toggleFavoriteMovie({ payload: id }: PayloadAction<number>) {
  const selectedFavoriteMovie = yield select(selectFavoriteMovieById, id)
  let response: AxiosResponse<Movie>

  try {
    if (!selectedFavoriteMovie) {
      response = yield call(api.post, `/favorite/${id}/1`)
    } else {
      response = yield call(api.post, `/favorite/${id}/0`)
    }
    yield put(toggleFavoriteMovieSuccess(response.data))
  } catch (err) {
    const error = err as AxiosError
    yield put(toggleFavoriteMovieFailure(error))
  }
}

function* watchFetchMovies() {
  yield takeEvery(getMoviesRequest.type, fetchMovies)
}

function* watchFetchPromoMovie() {
  yield takeEvery(getPromoMovieRequest.type, fetchPromoMovie)
}

function* watchFetchFavoriteMovies() {
  yield takeEvery(getFavoriteMoviesRequest.type, fetchFavoriteMovies)
}

function* watchToggleFavoriteMovie() {
  yield takeEvery(toggleFavoriteMovieRequest.type, toggleFavoriteMovie)
}

export function* moviesSaga() {
  yield all([
    fork(watchFetchMovies),
    fork(watchFetchPromoMovie),
    fork(watchFetchFavoriteMovies),
    fork(watchToggleFavoriteMovie)
  ])
}
