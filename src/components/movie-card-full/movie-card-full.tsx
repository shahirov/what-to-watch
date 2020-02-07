import React from 'react'

import { Logo } from '../logo'
import { Header } from '../header'
import { UserBlock } from '../user-block'
import { MovieCardTop } from '../movie-card-top'
import { Movie } from '../../features/movies/slice'
import { MovieCardBackground } from '../movie-card-background'
import { MovieCardDescription } from '../movie-card-description'
import { StyledMovieCardFull, MovieCardHero, MovieCardWrapper } from './movie-card-full-styles'

interface MovieCardFullProps {
  movie: Movie
}

export const MovieCardFull = ({ movie }: MovieCardFullProps) => {
  return (
    <StyledMovieCardFull>
      <MovieCardHero>
        <MovieCardBackground movie={movie} />
        <Header userPage={false}>
          <Logo color="light" />
          <UserBlock />
        </Header>
        <MovieCardWrapper>
          <MovieCardDescription movie={movie} />
        </MovieCardWrapper>
      </MovieCardHero>
      <MovieCardTop movie={movie} />
    </StyledMovieCardFull>
  )
}
