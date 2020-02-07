import React from 'react'

import { MovieCardList } from '../movie-сard-list'
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
        <MovieCardList movies={similarMovies} />
      </Catalog>
    </CatalogContent>
  )
}
