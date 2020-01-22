import { combineReducers } from '@reduxjs/toolkit'

import { moviesReducer } from '../features/movies/slice'
import { genreReducer } from '../features/genre/slice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer
})

export type RootState = ReturnType<typeof rootReducer>
