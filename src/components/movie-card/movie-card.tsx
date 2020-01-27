import React from 'react'

import { Header } from '../header'
import { MovieCardPoster } from '../movie-card-poster'
import { MovieCardBackground } from '../movie-card-background'
import { MovieCardDescription } from '../movie-card-description'
import { StyledMovieCard, MovieCardInfo, Wrapper } from './movie-card-styles'

export const MovieCard = () => {
  return (
    <StyledMovieCard>
      {/*<MovieCardBackground />*/}
      <Header />
      <Wrapper>
        <MovieCardInfo>
          {/*<MovieCardPoster />*/}
          {/*<MovieCardDescription />*/}
        </MovieCardInfo>
      </Wrapper>
    </StyledMovieCard>
  )
}
