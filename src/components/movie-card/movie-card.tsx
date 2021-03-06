import React from 'react'
import { useSelector } from 'react-redux'

import { Logo } from '../logo'
import { Header } from '../header'
import { UserBlock } from '../user-block'
import { MovieCardPoster } from '../movie-card-poster'
import { MovieCardBackground } from '../movie-card-background'
import { MovieCardDescription } from '../movie-card-description'
import { selectPromoMovie } from '../../features/movies/selectors'
import { StyledMovieCard, MovieCardInfo, Wrapper } from './movie-card-styles'

export const MovieCard = () => {
  const promoMovie = useSelector(selectPromoMovie)

  return (
    promoMovie && (
      <StyledMovieCard>
        <MovieCardBackground movie={promoMovie} />
        <Header userPage={false}>
          <Logo color="light" />
          <UserBlock />
        </Header>
        <Wrapper>
          <MovieCardInfo>
            <MovieCardPoster size="normal" movie={promoMovie} />
            <MovieCardDescription movie={promoMovie} />
          </MovieCardInfo>
        </Wrapper>
      </StyledMovieCard>
    )
  )
}
