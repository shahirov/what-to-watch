import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootState } from '../../store'
import { Movie } from '../../features/movies/slice'
import { MovieCardFull } from '../../components/movie-card-full'
import { SimilarMoviesCatalog } from '../../components/similar-movies-catalog'
import { selectMovieById, selectSimilarMovies } from '../../features/movies/selectors'

export const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>()

  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId))
  const similarMovies = useSelector<RootState, Movie[]>(state => selectSimilarMovies(state, movie))

  return movie ? (
    <>
      <MovieCardFull movie={movie} />
      <SimilarMoviesCatalog similarMovies={similarMovies} />
    </>
  ) : null
}
