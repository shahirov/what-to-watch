import React from 'react'

import { Main } from '../main/main'
import { Movie } from '../../mocks/movies'
import { GlobalStyles } from '../../global-styles'

interface AppProps {
  movies: Movie[]
}

export const App = ({ movies }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Main movies={movies} />
    </>
  )
}
