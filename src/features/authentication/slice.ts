import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export interface AuthUser {
  id: number
  email: string
  name: string
  avatar: string
}

export interface UserCredentials {
  email: string
  password: string
}

interface UserState {
  isUserAuthed: boolean
  user: AuthUser | null
  error: AxiosError | null
}

const initialState: UserState = {
  isUserAuthed: false,
  user: null,
  error: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state, action: PayloadAction<UserCredentials>) {},
    loginSuccess(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload
      state.isUserAuthed = true
      state.error = null
    },
    loginFailed(state, action: PayloadAction<AxiosError>) {
      state.error = action.payload
    },
    checkUserAuthStart(state) {
      state.isUserAuthed = false
    },
    checkUserAuthSuccess(state, action: PayloadAction<AuthUser>) {
      state.isUserAuthed = true
      state.user = action.payload
      state.error = null
    },
    checkUserAuthFailed(state, action: PayloadAction<AxiosError>) {
      state.error = action.payload
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  checkUserAuthStart,
  checkUserAuthSuccess,
  checkUserAuthFailed
} = user.actions

export const userReducer = user.reducer
