import React from 'react'

import { PlayButton } from '../buttons/play-button'
import { StyledMovieCardButtons } from './movie-card-buttons-styles'

interface MovieCardButtonsProps {
  movieId: string | number
}

export const MovieCardButtons = ({ movieId }: MovieCardButtonsProps) => {
  return (
    <StyledMovieCardButtons>
      <PlayButton movieId={movieId} />
    </StyledMovieCardButtons>
  )
}
