import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Movie {
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string
  released: number
  id: number
  isFavorite: boolean
  videoLink: string
  previewVideoLink: string
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
      state.movies = action.payload.sort((a, b) => a.name.localeCompare(b.name))
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
