import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MovieCardDirector, MovieCardStarring } from './movie-details-styles'
import { RootState } from '../../store'
import { Tabs } from '../../components/tabs'
import { Movie } from '../../features/movies/slice'
import { Header } from '../../components/header'
import { selectMovieById } from '../../features/movies/selectors'
import { SimilarMoviesCatalog } from '../../components/similar-movies-catalog'
import { MovieCardDescription } from '../../components/movie-card-description'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId!))

  if (movie) {
    const { posterImage, name, backgroundImage, rating, description, director, starring } = movie

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={posterImage} alt={name} />
            </div>

            <Header />

            <div className="movie-card__wrap">
              <MovieCardDescription movie={movie} />
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={backgroundImage} alt={`${name} poster`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <Tabs />
                </nav>

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
