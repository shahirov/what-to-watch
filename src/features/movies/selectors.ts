import { createSelector } from '@reduxjs/toolkit'

import { Movie } from './slice'
import { RootState } from '../../store'
import { selectGenre } from '../genre/selectors'

export const selectMovies = (state: RootState) => state.movies.movies

export const selectMovieId = (state: RootState, id: string) => id

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

export const selectMovieById = createSelector([selectMovies, selectMovieId], (movies, id) =>
  movies.find(movie => movie.id.toString() === id)
)

export const selectSimilarMovies = (state: RootState, currentMovie?: Movie) =>
  currentMovie
    ? state.movies.movies
        .filter(movie => movie.genre === currentMovie.genre)
        .filter((_, idx) => idx < 4)
    : state.movies.movies
