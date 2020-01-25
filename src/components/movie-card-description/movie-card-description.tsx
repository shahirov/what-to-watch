import React from 'react'

import {
  StyledMovieCardDesc,
  MovieCardTitle,
  MovieCardMeta,
  MovieCardGenre,
  MovieCardButtons,
  MovieCardButton
} from './movie-card-description-styles'
import { Movie } from '../../features/movies/slice'
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'

interface MovieCardDescriptionProps {
  movie?: Movie
}

export const MovieCardDescription = ({ movie }: MovieCardDescriptionProps) => {
  const { name = '', released = '', genre = '' } = movie || {}

  return (
    <StyledMovieCardDesc>
      <MovieCardTitle>{name}</MovieCardTitle>
      <MovieCardMeta>
        <MovieCardGenre>{genre}</MovieCardGenre>
        <span>{released}</span>
      </MovieCardMeta>

      <MovieCardButtons>
        <MovieCardButton type="button">
          <PlayIcon />
          <span>Play</span>
        </MovieCardButton>
        <MovieCardButton type="button">
          <AddIcon />
          <span>My list</span>
        </MovieCardButton>
      </MovieCardButtons>
    </StyledMovieCardDesc>
  )
}
