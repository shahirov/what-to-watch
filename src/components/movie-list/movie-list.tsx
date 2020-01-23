import React from 'react'

import { MovieCard } from '../movie-card'
import { Movie } from '../../features/movies/slice'
import { MovieListWrapper } from './movie-list-styles'

interface MovieListProps {
  movies: Movie[]
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <MovieListWrapper>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieListWrapper>
  )
}
