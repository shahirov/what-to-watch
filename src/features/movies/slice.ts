import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Movie {
  name: string
  poster_image: string
  preview_image: string
  background_image: string
  background_color: string
  description: string
  rating: number
  scores_count: number
  director: string
  starring: string[]
  run_time: number
  genre: string
  released: number
  id: number
  is_favorite: boolean
  video_link: string
  preview_video_link: string
}

interface MoviesState {
  movies: Movie[]
  isLoading: boolean
  error: Error | null
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesRequest(state) {
      state.isLoading = true
      state.error = null
    },
    getMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false
      state.movies = action.payload
      state.error = null
    },
    getMoviesFailure(state, action: PayloadAction<Error>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { getMoviesRequest, getMoviesSuccess, getMoviesFailure } = movies.actions

export const moviesReducer = movies.reducer
