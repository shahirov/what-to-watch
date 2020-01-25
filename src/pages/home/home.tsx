import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MoviesCatalog } from '../../components/movies-catalog'
import { Header } from '../../components/header'
import { MovieCardDescription } from '../../components/movie-card-description'
import { RootState } from '../../store'
import { Movie } from '../../features/movies/slice'
import { selectMovieById } from '../../features/movies/selectors'

export const Home = () => {
  const { movieId } = useParams<{ movieId: string }>()

  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId))

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <MovieCardDescription movie={movie} />
          </div>
        </div>
      </section>
      <MoviesCatalog />
    </>
  )
}
