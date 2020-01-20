import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'

const selectMoviesState = (state: RootState) => state.movies

export const selectGenre = createSelector([selectMoviesState], movies => movies.genre)

export const selectMovies = createSelector([selectMoviesState], movies => movies.movies)

export const selectMoviesByGenre = createSelector([selectGenre, selectMovies], (genre, movies) =>
  genre === 'All genres' ? movies : movies.filter(movie => movie.genre === genre)
)

export const selectGenres = createSelector([selectMovies], movies => {
  const genreSet: Set<string> = new Set()

  movies.forEach(movie => genreSet.add(movie.genre))

  const genres = Array.from(genreSet)
  genres.sort().unshift('All genres')

  return genres
})
