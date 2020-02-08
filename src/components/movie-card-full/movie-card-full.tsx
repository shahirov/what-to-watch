import React from 'react'

import { StyledMovieCardFull } from './movie-card-full-styles'

export const MovieCardFull: React.FC = ({ children }) => {
  return <StyledMovieCardFull>{children}</StyledMovieCardFull>
}
