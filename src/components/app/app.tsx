import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home } from '../../pages/home'
import { SignIn } from '../../pages/sign-in'
import { MyList } from '../../pages/my-list'
import { PrivateRoute } from '../private-route'
import { AddReview } from '../../pages/add-review'
import { MoviePlayer } from '../../pages/movie-player'
import { MovieDetails } from '../../pages/movie-details'
import { GlobalStyles } from '../../global/global-styles'
import { echoUserStart } from '../../features/user/slice'
import { getFavoriteMoviesRequest, getMoviesRequest } from '../../features/movies/slice'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(echoUserStart())
    dispatch(getFavoriteMoviesRequest())
    dispatch(getMoviesRequest())
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <PrivateRoute exact path="/mylist" component={MyList} />
        <PrivateRoute exact path="/movie/:movieId/review" component={AddReview} />
        <Route exact path="/movie/:movieId/player" component={MoviePlayer} />
        <Route exact path="/movie/:movieId" component={MovieDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
}
