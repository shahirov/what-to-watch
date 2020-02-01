import React from 'react'

import { MovieCardsList } from '../movie-сard-list'
import { Movie } from '../../features/movies/slice'
import { CatalogContent, Catalog, CatalogTitle } from './similar-movies-catalog-styles'

interface SimilarMoviesCatalogProps {
  similarMovies: Movie[]
}

export const SimilarMoviesCatalog = ({ similarMovies }: SimilarMoviesCatalogProps) => {
  return (
    <CatalogContent>
      <Catalog>
        <CatalogTitle>More like this</CatalogTitle>
        <MovieCardsList movies={similarMovies} />
      </Catalog>
    </CatalogContent>
  )
}
