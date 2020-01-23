import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../../pages/home'
import { GlobalStyles } from '../../global-styles'
import { MovieOverview } from '../../pages/movie-overview'
import { getMoviesRequest } from '../../features/movies/slice'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesRequest())
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={MovieOverview} />
      </Switch>
    </>
  )
}
