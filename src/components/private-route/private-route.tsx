import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { selectAuth } from '../../features/user/selectors'

interface PrivateRouteRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>
}

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteRouteProps) => {
  const isAuthed = useSelector(selectAuth)

  return (
    <Route
      {...rest}
      render={props => (isAuthed ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}
