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
  favoriteMovies: Movie[]
  promoMovie: Movie | null
  isLoading: boolean
  error: AxiosError | null
}

const initialState: MoviesState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: null,
  isLoading: false,
  error: null
}

const startLoading = (state: MoviesState) => {
  state.isLoading = true
}

const loadingFailed = (state: MoviesState, { payload }: PayloadAction<AxiosError>) => {
  state.isLoading = false
  state.error = payload
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesRequest: startLoading,
    getFavoriteMoviesRequest: startLoading,
    getPromoMovieRequest: startLoading,
    toggleFavoriteMovieRequest(state, action: PayloadAction<number>) {
      state.isLoading = true
    },
    getMoviesSuccess(state, { payload }: PayloadAction<Movie[]>) {
      state.isLoading = false
      state.movies = payload
    },
    getPromoMovieSuccess(state, { payload }: PayloadAction<Movie>) {
      state.isLoading = false
      state.promoMovie = payload
    },
    getFavoriteMoviesSuccess(state, { payload }: PayloadAction<Movie[]>) {
      state.isLoading = false
      state.favoriteMovies = payload
    },
    toggleFavoriteMovieSuccess(state, { payload }: PayloadAction<Movie>) {
      state.isLoading = false

      const favoriteMovie = state.favoriteMovies.find(movie => movie.id === payload.id)

      state.favoriteMovies = favoriteMovie
        ? state.favoriteMovies.filter(movie => movie.id !== favoriteMovie.id)
        : [...state.favoriteMovies, payload]
    },
    getMoviesFailure: loadingFailed,
    getPromoMovieFailure: loadingFailed,
    getFavoriteMoviesFailure: loadingFailed,
    toggleFavoriteMovieFailure: loadingFailed
  }
})

export const {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure,
  getPromoMovieRequest,
  getPromoMovieSuccess,
  getPromoMovieFailure,
  getFavoriteMoviesRequest,
  getFavoriteMoviesSuccess,
  getFavoriteMoviesFailure,
  toggleFavoriteMovieRequest,
  toggleFavoriteMovieSuccess,
  toggleFavoriteMovieFailure
} = movies.actions

export const moviesReducer = movies.reducer
