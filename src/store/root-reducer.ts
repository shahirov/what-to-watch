import { combineReducers } from '@reduxjs/toolkit'

import { reviewsReducer } from '../features/reviews/slice'
import { moviesReducer } from '../features/movies/slice'
import { genreReducer } from '../features/genre/slice'
import { userReducer } from '../features/user/slice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
  user: userReducer,
  reviews: reviewsReducer
})

export type RootState = ReturnType<typeof rootReducer>
