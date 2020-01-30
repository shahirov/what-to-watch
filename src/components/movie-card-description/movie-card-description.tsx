import React from 'react'

import {
  StyledMovieCardDesc,
  MovieCardTitle,
  MovieCardMeta,
  MovieCardGenre
} from './movie-card-description-styles'
import { Movie } from '../../features/movies/slice'
import { MovieCardButtons } from '../movie-card-buttons'

interface MovieCardDescriptionProps {
  movie: Movie
}

export const MovieCardDescription = ({
  movie: { id, name, released, genre }
}: MovieCardDescriptionProps) => {
  return (
    <StyledMovieCardDesc>
      <MovieCardTitle>{name}</MovieCardTitle>
      <MovieCardMeta>
        <MovieCardGenre>{genre}</MovieCardGenre>
        <span>{released}</span>
      </MovieCardMeta>
      <MovieCardButtons movieId={id} />
    </StyledMovieCardDesc>
  )
}
