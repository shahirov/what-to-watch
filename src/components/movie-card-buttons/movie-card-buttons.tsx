import React from 'react'

import { PlayButton } from '../buttons/play-button'
import { ListButton } from '../buttons/list-button'
import { ReviewButton } from '../buttons/review-button'
import { StyledMovieCardButtons } from './movie-card-buttons-styles'

interface MovieCardButtonsProps {
  movieId: string | number
}

export const MovieCardButtons = ({ movieId }: MovieCardButtonsProps) => {
  return (
    <StyledMovieCardButtons>
      <PlayButton movieId={movieId} />
      <ListButton />
      <ReviewButton />
    </StyledMovieCardButtons>
  )
}
