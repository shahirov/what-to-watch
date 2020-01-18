import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, MovieOverview } from '../../pages'
import { GlobalStyles } from '../../global-styles'
import { IMovie, IMovieOverview } from '../../mocks'

interface AppProps {
  movies: IMovie[]
  movieOverview: IMovieOverview
}

export const App = ({ movies, movieOverview }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home movies={movies} />
        </Route>
        <Route path="/movie">
          <MovieOverview movieOverview={movieOverview} />
        </Route>
      </Switch>
    </>
  )
}
