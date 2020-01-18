import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './components/app'
import { movies, movieOverview } from './mocks'

ReactDOM.render(
  <Router>
    <App movies={movies} movieOverview={movieOverview} />
  </Router>,
  document.getElementById('root')
)
