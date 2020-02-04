import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Footer } from '../../components/footer'
import { MovieCard } from '../../components/movie-card'
import { PageContent } from '../../components/page-content'
import { MoviesCatalog } from '../../components/movies-catalog'
import { getMoviesRequest, getPromoMovieRequest } from '../../features/movies/slice'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromoMovieRequest())
    dispatch(getMoviesRequest())
  }, [dispatch])

  return (
    <>
      <MovieCard />
      <PageContent>
        <MoviesCatalog />
        <Footer />
      </PageContent>
    </>
  )
}
