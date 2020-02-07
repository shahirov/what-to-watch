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

interface UserState {
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
    loginSuccess(state, action: PayloadAction<UserData>) {
      state.data = action.payload
      state.isAuthenticated = true
      state.error = null
    },
    loginFailed(state, action: PayloadAction<AxiosError>) {
      state.data = null
      state.isAuthenticated = false
      state.error = action.payload
    },
    echoUserStart() {}
  }
})

export const { loginStart, loginSuccess, loginFailed, echoUserStart } = user.actions

export const userReducer = user.reducer
