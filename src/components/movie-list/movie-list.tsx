import React from 'react'
import { useSelector } from 'react-redux'

import { MovieCard } from '../movie-card'
import { MovieListWrapper } from './movie-list-styles'
import { selectMoviesByGenre } from '../../features/movies/selectors'

export const MovieList = () => {
  const movies = useSelector(selectMoviesByGenre)

  return (
    <MovieListWrapper>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieListWrapper>
  )
}
