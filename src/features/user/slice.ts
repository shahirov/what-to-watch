import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export interface UserData {
  id: number
  email: string
  name: string
  avatarUrl: string
}

export interface UserCredentials {
  email: string
  password: string
}

export interface UserState {
  isAuthenticated: boolean
  data: UserData | null
  error: AxiosError | null
}

const initialState: UserState = {
  isAuthenticated: false,
  data: null,
  error: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state, action: PayloadAction<UserCredentials>) {},
    loginSuccess(state, { payload }: PayloadAction<UserData>) {
      state.data = payload
      state.isAuthenticated = true
      state.error = null
    },
    loginFailed(state, { payload }: PayloadAction<AxiosError>) {
      state.data = null
      state.isAuthenticated = false
      state.error = payload
    },
    echoUserStart() {}
  }
})

export const { loginStart, loginSuccess, loginFailed, echoUserStart } = user.actions

export const userReducer = user.reducer
