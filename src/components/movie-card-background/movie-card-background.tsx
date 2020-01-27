import React from 'react'

import { Movie } from '../../features/movies/slice'
import { CardImgContainer, CardBgImage } from './movie-card-background-styles'

interface MovieCardBackgroundProps {
  movie: Movie
}

export const MovieCardBackground = ({ movie: { posterImage, name } }: MovieCardBackgroundProps) => {
  return (
    <CardImgContainer>
      <CardBgImage src={posterImage} alt={name} />
    </CardImgContainer>
  )
}
