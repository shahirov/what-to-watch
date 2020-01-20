import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'

const selectMoviesState = (state: RootState) => state.movies

const selectGenre = createSelector([selectMoviesState], movies => movies.genre)

export const selectMovies = createSelector([selectMoviesState], movies => movies.movies)

export const selectMoviesByGenre = createSelector([selectGenre, selectMovies], (genre, movies) =>
  movies.filter(movie => movie.genre === genre)
)
