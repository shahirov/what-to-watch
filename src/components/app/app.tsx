import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../../pages/home'
import { MoviePlayer } from '../movie-player'
import { MovieDetails } from '../../pages/movie-details'
import { GlobalStyles } from '../../global/global-styles'
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
        <Route exact path="/movie/:movieId" component={MovieDetails} />
        <Route exact path="/movie/:movieId/show" component={MoviePlayer} />
      </Switch>
    </>
  )
}
