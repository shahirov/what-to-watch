import React from 'react'

import { Movie } from '../../features/movies/slice'
import { StyledMovieCardPoster } from './movie-card-poster-styles'

interface MovieCardPosterProps {
  movie: Movie
  size: 'small' | 'big' | 'normal'
}

export const MovieCardPoster = ({ movie: { posterImage, name }, size }: MovieCardPosterProps) => {
  return (
    <StyledMovieCardPoster size={size}>
      <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
    </StyledMovieCardPoster>
  )
}
