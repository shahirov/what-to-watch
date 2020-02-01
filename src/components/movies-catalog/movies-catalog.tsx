import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Footer } from '../footer'
import { GenreList } from '../genre-list'
import { ShowMoreBtn } from '../show-more-btn'
import { MOVIES } from '../../global/constants'
import { MovieCardsList } from '../movie-сard-list'
import { StyledMoviesCatalog } from './movies-catalog-styles'
import { selectMoviesByGenre } from '../../features/movies/selectors'

export const MoviesCatalog = () => {
  const [moviesCounter, setMoviesCounter] = useState(MOVIES.COUNTER)

  const movies = useSelector(selectMoviesByGenre)

  const showMoreMovies = () =>
    setMoviesCounter(prevMoviesCounter => prevMoviesCounter + MOVIES.STEP)

  return (
    <StyledMoviesCatalog>
      <GenreList />
      <MovieCardsList movies={movies.slice(0, moviesCounter)} />
      {moviesCounter < movies.length && <ShowMoreBtn onButtonClick={showMoreMovies} />}
    </StyledMoviesCatalog>
  )
}
