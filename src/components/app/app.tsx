import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Spinner } from '../spinner'
import { PrivateRoute } from '../private-route'
import { GlobalStyles } from '../../global/global-styles'
import { echoUserStart } from '../../features/user/slice'
import { getFavoriteMoviesRequest, getMoviesRequest } from '../../features/movies/slice'

const Home = lazy(() => import('../../pages/home'))
const SignIn = lazy(() => import('../../pages/sign-in'))
const MyList = lazy(() => import('../../pages/my-list'))
const AddReview = lazy(() => import('../../pages/add-review'))
const MoviePlayer = lazy(() => import('../../pages/movie-player'))
const MovieDetails = lazy(() => import('../../pages/movie-details'))

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
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <PrivateRoute exact path="/mylist" component={MyList} />
          <PrivateRoute exact path="/movie/:movieId/review" component={AddReview} />
          <Route exact path="/movie/:movieId/player" component={MoviePlayer} />
          <Route exact path="/movie/:movieId" component={MovieDetails} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </>
  )
}
