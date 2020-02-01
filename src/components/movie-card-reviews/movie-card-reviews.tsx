import React from 'react'

import { Review } from '../review'
import { StyledMovieCardReviews, MovieCardReviewsCol } from './movie-card-reviews-styles'

export const MovieCardReviews = () => {
  return (
    <StyledMovieCardReviews>
      <MovieCardReviewsCol>
        <Review />
      </MovieCardReviewsCol>
    </StyledMovieCardReviews>
  )
}
