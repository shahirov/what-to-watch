import React from 'react'

import { IMovie } from '../../mocks'
import { MovieCard } from '../movie-card'
import { MoviesListWrapper } from './movies-list-styles'

interface MoviesListProps {
  movies: IMovie[]
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <MoviesListWrapper>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesListWrapper>
  )
}
