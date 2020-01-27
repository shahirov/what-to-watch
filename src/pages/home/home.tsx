import React from 'react'

import { MovieCard } from '../../components/movie-card'
import { MoviesCatalog } from '../../components/movies-catalog'

export const Home = () => {
  return (
    <>
      <MovieCard />
      <MoviesCatalog />
    </>
  )
}
