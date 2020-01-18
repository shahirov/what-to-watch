import React from 'react'

import { Movie } from '../../mocks/movies'
import { MovieCard } from '../movie-card/movie-card'
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
