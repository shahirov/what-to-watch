import React from 'react'

import { MovieCard } from '../movie-card'
import { Movie } from '../../features/movies/slice'
import { StyledMovieCardsList } from './movie-cards-list-styles'

interface MovieCardsListProps {
  movies: Movie[]
}

export const MovieCardsList = ({ movies }: MovieCardsListProps) => {
  return (
    <StyledMovieCardsList>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </StyledMovieCardsList>
  )
}
