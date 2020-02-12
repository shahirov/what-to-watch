import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  AddReviewText,
  AddReviewTextArea,
  AddReviewSubmit,
  AddReviewButton
} from './add-review-form-styles'
import { StarRating } from '../star-rating'
import { addReviewRequest } from '../../features/reviews/slice'

interface AddReviewFormProps {
  defaultRating: number
  movieId: number
}

const MAX_RATING = 5

export const AddReviewForm = ({ defaultRating, movieId }: AddReviewFormProps) => {
  const normalizedDefaultRating = defaultRating < MAX_RATING ? Math.round(defaultRating) : 5

  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(normalizedDefaultRating)
  const [isValid, setIsValid] = useState(false)

  const changeRating = (rating: number) => {
    setRating(rating)
  }

  const validateReview = (value: string) => {
    const MIN_COMMENT_LENGTH = 50
    const MAX_COMMENT_LENGTH = 400

    return value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH
  }

  const validateRating = (value: number) => {
    return value > 0
  }

  const changeReviewText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    const isReviewValid = validateReview(value.trim())
    const isRatingValid = validateRating(rating)
    const valid = isReviewValid && isRatingValid

    setIsValid(valid)
    setComment(value)
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch(addReviewRequest({ id: movieId, review: { comment: comment.trim(), rating } }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <StarRating numberOfStars={5} currentRating={rating} onRatingChange={changeRating} />
      <AddReviewText>
        <AddReviewTextArea
          name="review-text"
          placeholder="Review text"
          value={comment}
          onChange={changeReviewText}
        />
        <AddReviewSubmit>
          <AddReviewButton type="submit" disabled={!isValid}>
            Post
          </AddReviewButton>
        </AddReviewSubmit>
      </AddReviewText>
    </form>
  )
}
