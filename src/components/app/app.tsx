import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, MovieOverview } from '../../pages'
import { GlobalStyles } from '../../global-styles'
import { IMovieOverview } from '../../mocks'

interface AppProps {
  movieOverview: IMovieOverview
}

export const App = ({ movieOverview }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie">
          <MovieOverview movieOverview={movieOverview} />
        </Route>
      </Switch>
    </>
  )
}
