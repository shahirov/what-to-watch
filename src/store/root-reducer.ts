import { combineReducers } from '@reduxjs/toolkit'

import { moviesReducer } from '../features/movies/slice'
import { genreReducer } from '../features/genre/slice'
import { userReducer } from '../features/authentication/slice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
