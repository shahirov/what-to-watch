import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
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
  addReviewFailure,
  ReviewRequestPayload
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

function* addReview({ payload: { id, review } }: PayloadAction<ReviewRequestPayload>) {
  try {
    const response: AxiosResponse<IReview> = yield call(api.post, `/comments/${id}`, review)
    if (response.status === 200) {
      yield put(addReviewSuccess())
      yield put(push(`/movie/${id}`))
    }
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
