import React from 'react'

import { Footer } from '../../components/footer'
import { MovieCard } from '../../components/movie-card'
import { PageContent } from '../../components/page-content'
import { MoviesCatalog } from '../../components/movies-catalog'

export const Home = () => {
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
