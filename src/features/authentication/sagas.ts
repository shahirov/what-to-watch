import { all, put, takeLatest, fork, call } from 'redux-saga/effects'
import { AxiosError, AxiosResponse } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import {
  loginStart,
  loginSuccess,
  loginFailed,
  checkUserAuthStart,
  checkUserAuthSuccess,
  checkUserAuthFailed,
  UserCredentials
} from './slice'
import { api } from '../../api'

function* checkUserAuthStatus() {
  try {
    const user: AxiosResponse = yield call(api.get, '/login')
    if (user.status === 200) {
      yield put(checkUserAuthSuccess(user.data))
    }
  } catch (err) {
    const error = err as AxiosError
    yield put(checkUserAuthFailed(error))
  }
}

function* loginUser({ payload }: PayloadAction<UserCredentials>) {
  try {
    const user: AxiosResponse = yield call(api.post, '/login', payload)
    if (user.status === 200) {
      yield put(loginSuccess(user.data))
    }
  } catch (err) {
    const error = err as AxiosError
    yield put(loginFailed(error))
  }
}

function* watchLoginUser() {
  yield takeLatest(loginStart.type, loginUser)
}

function* watchCheckUserAuthStatus() {
  yield takeLatest(checkUserAuthStart.type, checkUserAuthStatus)
}

export function* authSagas() {
  yield all([fork(watchLoginUser), fork(watchCheckUserAuthStatus)])
}
