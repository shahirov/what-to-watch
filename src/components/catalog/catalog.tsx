import React from 'react'
import { useSelector } from 'react-redux'

import { Footer } from '../footer'
import { GenreList } from '../genre-list'
import { MovieList } from '../movie-list'
import { CatalogButton } from './catalog-styles'
import { selectMoviesByGenre } from '../../features/movies/selectors'

export const Catalog = () => {
  const movies = useSelector(selectMoviesByGenre)

  return (
    <section>
      <GenreList />
      <MovieList movies={movies} />
      <div>
        <CatalogButton type="button">Show more</CatalogButton>
      </div>
      <Footer />
    </section>
  )
}
