import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Home, MovieOverview } from '../../pages'
import { GlobalStyles } from '../../global-styles'
import { IMovieOverview } from '../../mocks'
import { getMoviesRequest } from '../../features/movies/slice'

interface AppProps {
  movieOverview: IMovieOverview
}

export const App = ({ movieOverview }: AppProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesRequest())
  }, [dispatch])

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
