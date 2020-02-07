import React from 'react'

import { PlayButton } from '../buttons/play-button'
import { ListButton } from '../buttons/list-button'
import { ReviewButton } from '../buttons/review-button'
import { StyledMovieCardButtons } from './movie-card-buttons-styles'

interface MovieCardButtonsProps {
  movieId: number
}

export const MovieCardButtons = ({ movieId }: MovieCardButtonsProps) => {
  return (
    <StyledMovieCardButtons>
      <PlayButton movieId={movieId} />
      <ListButton movieId={movieId} />
      <ReviewButton movieId={movieId} />
    </StyledMovieCardButtons>
  )
}
