import React from 'react'

import { RatingInput, RatingLabel, RatingStars } from './star-rating-styles'

interface StarRatingProps {
  numberOfStars: number
  currentRating: number
  onRatingChange: (rating: number) => void
}

export const StarRating = ({ numberOfStars, currentRating, onRatingChange }: StarRatingProps) => {
  const ratings = Array.from({ length: numberOfStars }, (_, idx) => idx + 1)

  return (
    <RatingStars>
      {ratings.map(rating => (
        <React.Fragment key={rating}>
          <RatingInput
            id={`star-${rating}`}
            type="radio"
            name="rating"
            value={rating}
            checked={rating === Math.round(currentRating)}
            onChange={() => onRatingChange(rating)}
          />
          <RatingLabel htmlFor={`star-${rating}`}>Rating {rating}</RatingLabel>
        </React.Fragment>
      ))}
    </RatingStars>
  )
}
