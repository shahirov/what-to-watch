import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  SimilarMoviesCatalog,
  SimilarMoviesCatalogTitle,
  MovieCardDirector,
  MovieCardStarring
} from './movie-overview-styles'
import { RootState } from '../../store'
import { Tabs } from '../../components/tabs'
import { Footer } from '../../components/footer'
import { Movie } from '../../features/movies/slice'
import { MovieList } from '../../components/movie-list'
import { PageHeader } from '../../components/page-header'
import { selectMovieById, selectSimilarMovies } from '../../features/movies/selectors'

export const MovieOverview = () => {
  const { movieId } = useParams()

  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId!))
  const similarMovies = useSelector<RootState, Movie[]>(state =>
    selectSimilarMovies(state, movie!)
  ).filter((_, idx) => idx < 4)

  if (movie) {
    const {
      posterImage,
      name,
      genre,
      released,
      backgroundImage,
      rating,
      description,
      director,
      starring
    } = movie

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={posterImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">
                    Add review
                  </a>
                </div>
              </div>
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
                    <strong>Starring: {starring}</strong>
                  </MovieCardStarring>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <SimilarMoviesCatalog>
            <SimilarMoviesCatalogTitle>More like this</SimilarMoviesCatalogTitle>
            <MovieList movies={similarMovies} />
          </SimilarMoviesCatalog>

          <Footer />
        </div>
      </>
    )
  }

  return null
}
