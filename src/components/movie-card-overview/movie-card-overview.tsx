import React from 'react'

import { Movie } from '../../features/movies/slice'
import {
  MovieCardDirector,
  MovieCardStarring,
  MovieCardText,
  MovieRating,
  MovieRatingCount,
  MovieRatingLevel,
  MovieRatingMeta,
  MovieRatingScore
} from './movie-card-overview-styles'

interface MovieCardOverviewProps {
  movie: Movie
}

export const MovieCardOverview = ({
  movie: { rating, description, director, starring, scoresCount }
}: MovieCardOverviewProps) => {
  return (
    <>
      <MovieRating>
        <MovieRatingScore>{rating}</MovieRatingScore>
        <MovieRatingMeta>
          <MovieRatingLevel>Very good</MovieRatingLevel>
          <MovieRatingCount>{scoresCount} ratings</MovieRatingCount>
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
