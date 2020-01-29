import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '../header'
import { MovieCardPoster } from '../movie-card-poster'
import { MovieCardBackground } from '../movie-card-background'
import { MovieCardDescription } from '../movie-card-description'
import { getPromoMovieRequest } from '../../features/movies/slice'
import { selectPromoMovie } from '../../features/movies/selectors'
import { StyledMovieCard, MovieCardInfo, Wrapper } from './movie-card-styles'

export const MovieCard = () => {
  const dispatch = useDispatch()

  const promoMovie = useSelector(selectPromoMovie)

  useEffect(() => {
    dispatch(getPromoMovieRequest())
  }, [dispatch])

  return (
    promoMovie && (
      <StyledMovieCard>
        <MovieCardBackground movie={promoMovie} />
        <Header />
        <Wrapper>
          <MovieCardInfo>
            <MovieCardPoster movie={promoMovie} />
            <MovieCardDescription movie={promoMovie} />
          </MovieCardInfo>
        </Wrapper>
      </StyledMovieCard>
    )
  )
}
