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
import { IReview } from '../../features/reviews/slice'
import { formatDate } from '../../utils/date-convert'

interface ReviewProps {
  review: IReview
}

export const Review = ({ review: { comment, user, date, rating } }: ReviewProps) => {
  return (
    <StyledReview>
      <ReviewQuote>
        <ReviewText>{comment}</ReviewText>

        <ReviewDetails>
          <ReviewAuthor>{user.name}</ReviewAuthor>
          <ReviewDate dateTime="2016-12-24">{formatDate(new Date(date))}</ReviewDate>
        </ReviewDetails>
      </ReviewQuote>

      <ReviewRating>{rating}</ReviewRating>
    </StyledReview>
  )
}
