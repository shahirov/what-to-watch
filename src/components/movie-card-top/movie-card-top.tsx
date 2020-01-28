import React from 'react'

import { MovieCardTabs } from '../movie-card-tabs'
import { Movie } from '../../features/movies/slice'
import { MovieCardPoster } from '../movie-card-poster'
import { MovieCardDetails } from '../movie-card-details'
import { StyledMovieCardTop, MovieCardInfo, MovieCardDesc } from './movie-card-top-styles'

interface MovieCardTopProps {
  movie: Movie
}

export const MovieCardTop = ({ movie }: MovieCardTopProps) => {
  return (
    <StyledMovieCardTop>
      <MovieCardInfo>
        <MovieCardPoster movie={movie} />
        <MovieCardDesc>
          <MovieCardTabs />
          <MovieCardDetails movie={movie} />
        </MovieCardDesc>
      </MovieCardInfo>
    </StyledMovieCardTop>
  )
}
