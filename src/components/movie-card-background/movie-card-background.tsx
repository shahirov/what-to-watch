import React from 'react'

import { Movie } from '../../features/movies/slice'
import { CardImgContainer, CardBgImage } from './movie-card-background-styles'

interface MovieCardBackgroundProps {
  movie: Movie
}

export const MovieCardBackground = ({
  movie: { backgroundImage, name }
}: MovieCardBackgroundProps) => {
  return (
    <CardImgContainer>
      <CardBgImage src={backgroundImage} alt={name} />
    </CardImgContainer>
  )
}
