import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { reviewsReducer, ReviewsState } from '../features/reviews/slice'
import { moviesReducer, MoviesState } from '../features/movies/slice'
import { genreReducer, GenreState } from '../features/genre/slice'
import { userReducer, UserState } from '../features/user/slice'

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    movies: moviesReducer,
    genre: genreReducer,
    user: userReducer,
    reviews: reviewsReducer
  })

export interface RootState {
  router: RouterState
  movies: MoviesState
  genre: GenreState
  user: UserState
  reviews: ReviewsState
}
