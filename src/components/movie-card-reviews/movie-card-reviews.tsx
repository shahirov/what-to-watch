import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Review } from '../review'
import { selectReviews } from '../../features/reviews/selectors'
import { getReviewsRequest, IReview } from '../../features/reviews/slice'
import { StyledMovieCardReviews, MovieCardReviewsCol } from './movie-card-reviews-styles'

interface MovieCardReviewsProps {
  movieId: number
}

const COLUMNS_COUNT = 2

export const MovieCardReviews = ({ movieId }: MovieCardReviewsProps) => {
  const dispatch = useDispatch()
  const reviews = useSelector(selectReviews)

  useEffect(() => {
    dispatch(getReviewsRequest(movieId))
  }, [dispatch, movieId])

  const rowsCount = Math.ceil(reviews.length / COLUMNS_COUNT)

  const renderReview = (review: IReview) => <Review key={review.id} review={review} />

  return (
    <StyledMovieCardReviews>
      {reviews.length > 1 ? (
        <>
          <MovieCardReviewsCol>{reviews.slice(0, rowsCount).map(renderReview)}</MovieCardReviewsCol>
          <MovieCardReviewsCol>{reviews.slice(rowsCount).map(renderReview)}</MovieCardReviewsCol>
        </>
      ) : (
        <MovieCardReviewsCol>{reviews.map(renderReview)}</MovieCardReviewsCol>
      )}
    </StyledMovieCardReviews>
  )
}
