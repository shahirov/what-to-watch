import { createSelector } from '@reduxjs/toolkit'

import { Movie } from './slice'
import { RootState } from '../../store'
import { selectGenre } from '../genre/selectors'
import { DEFAULT_MOVIE_GENRE, SIMILAR_MOVIES_LIMIT } from '../../global/constants'

export const selectMovies = (state: RootState) => state.movies.movies

export const selectMovieId = (state: RootState, id: string) => id

export const selectMoviesByGenre = createSelector([selectGenre, selectMovies], (genre, movies) =>
  genre === DEFAULT_MOVIE_GENRE ? movies : movies.filter(movie => movie.genre === genre)
)

export const selectGenreList = createSelector([selectMovies], movies => {
  const genreSet: Set<string> = new Set()

  movies.forEach(movie => genreSet.add(movie.genre))

  return [DEFAULT_MOVIE_GENRE, ...Array.from(genreSet)]
})

export const selectMovieById = createSelector([selectMovies, selectMovieId], (movies, id) =>
  movies.find(movie => movie.id.toString() === id)
)

export const selectSimilarMovies = (state: RootState, currentMovie?: Movie) =>
  currentMovie
    ? state.movies.movies
        .filter(movie => movie.id !== currentMovie.id && movie.genre === currentMovie.genre)
        .filter((_, idx) => idx < SIMILAR_MOVIES_LIMIT)
    : state.movies.movies
