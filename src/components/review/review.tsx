import React from 'react'

import {
  StyledReview,
  ReviewQuote,
  ReviewText,
  ReviewDetails,
  ReviewAuthor,
  ReviewDate,
  ReviewRating
} from './review-styles'

export const Review = () => {
  return (
    <StyledReview>
      <ReviewQuote>
        <ReviewText>
          Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director's funniest and most exquisitely designed movies in years.
        </ReviewText>

        <ReviewDetails>
          <ReviewAuthor>Corey</ReviewAuthor>
          <ReviewDate dateTime="2016-12-24">December 24, 2016</ReviewDate>
        </ReviewDetails>
      </ReviewQuote>

      <ReviewRating>8,9</ReviewRating>
    </StyledReview>
  )
}
