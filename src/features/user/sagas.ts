import { all, put, takeLatest, fork, call } from 'redux-saga/effects'
import { AxiosError, AxiosResponse } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import {
  loginStart,
  loginSuccess,
  loginFailed,
  echoUserStart,
  UserCredentials,
  UserData
} from './slice'
import { api } from '../../api'
import { normalizeObjectKeys } from '../../utils/normalize-object-keys'

function* echoUser() {
  try {
    const user: AxiosResponse<UserData> = yield call(api.get, '/login')
    const normalizedData = normalizeObjectKeys(user.data)
    yield put(loginSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(loginFailed(error))
  }
}

function* login({ payload: userCredentials }: PayloadAction<UserCredentials>) {
  try {
    const user: AxiosResponse<UserData> = yield call(api.post, '/login', userCredentials)
    const normalizedData = normalizeObjectKeys(user.data)
    yield put(loginSuccess(normalizedData))
  } catch (err) {
    const error = err as AxiosError
    yield put(loginFailed(error))
  }
}

function* watchLogin() {
  yield takeLatest(loginStart.type, login)
}

function* watchEchoUser() {
  yield takeLatest(echoUserStart.type, echoUser)
}

export function* userSagas() {
  yield all([fork(watchLogin), fork(watchEchoUser)])
}
