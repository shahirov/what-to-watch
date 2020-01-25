import React from 'react'
import { useSelector } from 'react-redux'

import { Footer } from '../footer'
import { GenreList } from '../genre-list'
import { MovieCardsList } from '../movie-сards-list'
import { selectMoviesByGenre } from '../../features/movies/selectors'
import { StyledMoviesCatalog, MoviesCatalogButton } from './movies-catalog-styles'

export const MoviesCatalog = () => {
  const movies = useSelector(selectMoviesByGenre)

  return (
    <StyledMoviesCatalog>
      <GenreList />
      <MovieCardsList movies={movies} />
      <MoviesCatalogButton type="button">Show more</MoviesCatalogButton>
      <Footer />
    </StyledMoviesCatalog>
  )
}
