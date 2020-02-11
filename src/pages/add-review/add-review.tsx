import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootState } from '../../store'
import { Logo } from '../../components/logo'
import { Header } from '../../components/header'
import { Movie } from '../../features/movies/slice'
import { UserBlock } from '../../components/user-block'
import { Breadcrumbs } from '../../components/breadcrumbs'
import { MovieCardHeader, Wrapper } from './add-review-styles'
import { MovieCardFull } from '../../components/movie-card-full'
import { AddReviewForm } from '../../components/add-review-form'
import { selectMovieById } from '../../features/movies/selectors'
import { MovieCardPoster } from '../../components/movie-card-poster'
import { MovieCardBackground } from '../../components/movie-card-background'

export const AddReview = () => {
  const { movieId } = useParams<{ movieId: string }>()

  const movie = useSelector<RootState, Movie | undefined>(state =>
    selectMovieById(state, parseInt(movieId))
  )

  if (!movie) {
    return null
  }

  const { rating, id } = movie

  return (
    <MovieCardFull>
      <MovieCardHeader>
        <MovieCardBackground movie={movie} />
        <Header userPage={false}>
          <Logo color="light" />
          <Breadcrumbs movie={movie} />
          <UserBlock />
        </Header>
        <MovieCardPoster movie={movie} size="small" />
      </MovieCardHeader>
      <Wrapper>
        <AddReviewForm defaultRating={rating} movieId={id} />
      </Wrapper>
    </MovieCardFull>
  )
}
