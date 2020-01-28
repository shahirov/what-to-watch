import React from 'react'

import {
  MovieRating,
  MovieRatingScore,
  MovieRatingMeta,
  MovieRatingCount,
  MovieRatingLevel,
  MovieCardText,
  MovieCardDirector,
  MovieCardStarring
} from './movie-card-details-styles'
import { Movie } from '../../features/movies/slice'

interface MovieCardDetailsProps {
  movie: Movie
}

export const MovieCardDetails = ({
  movie: { rating, description, director, starring }
}: MovieCardDetailsProps) => {
  return (
    <>
      <MovieRating>
        <MovieRatingScore>{rating}</MovieRatingScore>
        <MovieRatingMeta>
          <MovieRatingLevel>Very good</MovieRatingLevel>
          <MovieRatingCount>{rating} ratings</MovieRatingCount>
        </MovieRatingMeta>
      </MovieRating>
      <MovieCardText>
        <p>{description}</p>
        <MovieCardDirector>
          <strong>Director: {director}</strong>
        </MovieCardDirector>
        <MovieCardStarring>
          <strong>Starring: {starring.join(', ')}</strong>
        </MovieCardStarring>
      </MovieCardText>
    </>
  )
}
