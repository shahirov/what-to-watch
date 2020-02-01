import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home } from '../../pages/home'
import { SignIn } from '../../pages/sign-in'
import { MoviePlayer } from '../movie-player'
import { MovieDetails } from '../../pages/movie-details'
import { GlobalStyles } from '../../global/global-styles'
import { checkUserAuthStart } from '../../features/authentication/slice'
import { getMoviesRequest, getPromoMovieRequest } from '../../features/movies/slice'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuthStart())
    dispatch(getPromoMovieRequest())
    dispatch(getMoviesRequest())
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/movie/:movieId" component={MovieDetails} />
        <Route exact path="/movie/:movieId/show" component={MoviePlayer} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
}
