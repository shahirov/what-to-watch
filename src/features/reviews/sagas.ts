import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'

import { api } from '../../api'
import {
  getReviewsRequest,
  getReviewsFailure,
  IReview,
  getReviewsSuccess,
  addReviewRequest,
  addReviewSuccess,
  addReviewFailure
} from './slice'

function* fetchReviews({ payload: id }: PayloadAction<number>) {
  try {
    const response: AxiosResponse<IReview[]> = yield call(api.get, `/comments/${id}`)
    yield put(getReviewsSuccess(response.data))
  } catch (err) {
    const error = err as AxiosError
    yield put(getReviewsFailure(error))
  }
}

function* addReview({
  payload: { id, review }
}: PayloadAction<{ id: number; review: { rating: number; comment: string } }>) {
  try {
    yield call(api.post, `/comments/${id}`, review)
    yield put(addReviewSuccess())
  } catch (err) {
    const error = err as AxiosError
    yield put(addReviewFailure(error))
  }
}

function* watchFetchReviews() {
  yield takeLatest(getReviewsRequest.type, fetchReviews)
}

function* watchAddReview() {
  yield takeLatest(addReviewRequest.type, addReview)
}

export function* reviewsSaga() {
  yield all([fork(watchFetchReviews), fork(watchAddReview)])
}
