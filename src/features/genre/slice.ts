import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GenreState {
  genre: string
}

const initialState: GenreState = {
  genre: 'All genres'
}

const genre = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    changeGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload
    }
  }
})

export const { changeGenre } = genre.actions

export const genreReducer = genre.reducer
