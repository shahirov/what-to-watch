import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

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
  promoMovie: Movie | null
  isLoading: boolean
  error: Error | null
}

const initialState: MoviesState = {
  movies: [],
  promoMovie: null,
  isLoading: false,
  error: null
}

const startLoading = (state: MoviesState) => {
  state.isLoading = true
  state.error = null
}

const loadingFailed = (state: MoviesState, action: PayloadAction<AxiosError>) => {
  state.isLoading = false
  state.error = action.payload
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesRequest: startLoading,
    getMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false
      state.movies = action.payload
      state.error = null
    },
    getMoviesFailure: loadingFailed,
    getPromoMovieRequest: startLoading,
    getPromoMovieSuccess(state, action: PayloadAction<Movie>) {
      state.isLoading = false
      state.promoMovie = action.payload
      state.error = null
    },
    getPromoMovieFailure: loadingFailed
  }
})

export const {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure,
  getPromoMovieRequest,
  getPromoMovieSuccess,
  getPromoMovieFailure
} = movies.actions

export const moviesReducer = movies.reducer
