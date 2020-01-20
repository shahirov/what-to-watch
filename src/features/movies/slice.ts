import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { movies as MockMoviesData, IMovie } from '../../mocks'

interface MoviesState {
  genre: string
  movies: IMovie[]
}

const initialState: MoviesState = {
  genre: 'All genres',
  movies: MockMoviesData
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload
    }
  }
})

export const { changeGenre } = movies.actions

export const moviesReducer = movies.reducer
