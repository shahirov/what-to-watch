import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  isUserAuth: null
}

const initialState: UserState = {
  isUserAuth: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userReducer = user.reducer
