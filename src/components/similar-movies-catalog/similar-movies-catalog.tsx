import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Footer } from '../footer'
import { RootState } from '../../store'
import { MovieCardsList } from '../movie-сard-list'
import { Movie } from '../../features/movies/slice'
import { selectMovieById, selectSimilarMovies } from '../../features/movies/selectors'
import { CatalogContent, Catalog, CatalogTitle } from './similar-movies-catalog-styles'

export const SimilarMoviesCatalog = () => {
  const { movieId } = useParams()

  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId!))
  const similarMovies = useSelector<RootState, Movie[]>(state =>
    selectSimilarMovies(state, movie!)
  ).filter((_, idx) => idx < 4)

  return (
    <CatalogContent>
      <Catalog>
        <CatalogTitle>More like this</CatalogTitle>
        <MovieCardsList movies={similarMovies} />
      </Catalog>
      <Footer />
    </CatalogContent>
  )
}
