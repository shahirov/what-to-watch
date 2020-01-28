import React from 'react'

import { StyledMovieCardFull, MovieCardHero, MovieCardWrapper } from './movie-card-full-styles'
import { Header } from '../header'
import { MovieCardTop } from '../movie-card-top'
import { Movie } from '../../features/movies/slice'
import { MovieCardBackground } from '../movie-card-background'
import { MovieCardDescription } from '../movie-card-description'

interface MovieCardFullProps {
  movie: Movie
}

export const MovieCardFull = ({ movie }: MovieCardFullProps) => {
  return (
    <StyledMovieCardFull>
      <MovieCardHero>
        <MovieCardBackground movie={movie} />
        <Header />
        <MovieCardWrapper>
          <MovieCardDescription movie={movie} />
        </MovieCardWrapper>
      </MovieCardHero>
      <MovieCardTop movie={movie} />
    </StyledMovieCardFull>
  )
}
