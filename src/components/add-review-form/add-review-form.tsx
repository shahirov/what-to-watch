import React, { useState } from 'react'

import {
  AddReviewText,
  AddReviewTextArea,
  AddReviewSubmit,
  AddReviewButton
} from './add-review-form-styles'
import { StarRating } from '../star-rating'

interface AddReviewFormProps {
  defaultRating: number
}

export const AddReviewForm = ({ defaultRating }: AddReviewFormProps) => {
  const [value, setValue] = useState('')
  const [rating, setRating] = useState(defaultRating)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  const changeReviewText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setValue(value)
  }

  const changeRating = (rating: number) => {
    setRating(rating)
  }

  return (
    <form onSubmit={handleSubmit}>
      <StarRating numberOfStars={5} currentRating={rating} onRatingChange={changeRating} />
      <AddReviewText>
        <AddReviewTextArea
          name="review-text"
          placeholder="Review text"
          value={value}
          onChange={changeReviewText}
        />
        <AddReviewSubmit>
          <AddReviewButton type="submit">Post</AddReviewButton>
        </AddReviewSubmit>
      </AddReviewText>
    </form>
  )
}
