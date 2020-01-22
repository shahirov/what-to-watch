import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { selectGenre } from '../genre/selectors'

const selectMovies = (state: RootState) => state.movies.movies

export const selectMoviesByGenre = createSelector([selectGenre, selectMovies], (genre, movies) =>
  genre === 'All genres' ? movies : movies.filter(movie => movie.genre === genre)
)

export const selectGenreList = createSelector([selectMovies], movies => {
  const genreSet: Set<string> = new Set()

  movies.forEach(movie => genreSet.add(movie.genre))

  const genres = Array.from(genreSet)
  genres.sort().unshift('All genres')

  return genres
})
