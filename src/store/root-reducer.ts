import { combineReducers } from '@reduxjs/toolkit'

import { moviesReducer } from '../features/movies/slice'

export const rootReducer = combineReducers({
  movies: moviesReducer
})

export type RootState = ReturnType<typeof rootReducer>
