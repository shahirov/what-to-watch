import React from 'react'

import { LinkButton } from '../buttons-styles'

interface ReviewButtonProps {
  movieId: string | number
}

export const ReviewButton = ({ movieId }: ReviewButtonProps) => {
  return (
    <LinkButton to={`/movie/${movieId}/review`}>
      <span>Add review</span>
    </LinkButton>
  )
}
