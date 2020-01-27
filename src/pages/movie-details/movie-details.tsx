import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootState } from '../../store'
import { Header } from '../../components/header'
import { Movie } from '../../features/movies/slice'
import { MovieCardTabs } from '../../components/movie-card-tabs'
import { selectMovieById } from '../../features/movies/selectors'
import { MovieCardBackground } from '../../components/movie-card-background'
import { SimilarMoviesCatalog } from '../../components/similar-movies-catalog'
import { MovieCardDescription } from '../../components/movie-card-description'
import { MovieCardDirector, MovieCardStarring, MovieCardWrapper } from './movie-details-styles'
import { MovieCardPoster } from '../../components/movie-card-poster'

export const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>()
  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId))

  if (movie) {
    const { rating, description, director, starring } = movie

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieCardBackground movie={movie} />
            <Header />
            <MovieCardWrapper>
              <MovieCardDescription movie={movie} />
            </MovieCardWrapper>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <MovieCardPoster movie={movie} />
              <div className="movie-card__desc">
                <MovieCardTabs />

                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">Very good</span>
                    <span className="movie-rating__count">{rating} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <MovieCardDirector>
                    <strong>Director: {director}</strong>
                  </MovieCardDirector>

                  <MovieCardStarring>
                    <strong>Starring: {starring.join(', ')}</strong>
                  </MovieCardStarring>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SimilarMoviesCatalog />
      </>
    )
  }

  return null
}
