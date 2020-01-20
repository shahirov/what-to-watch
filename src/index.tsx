import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from './store'
import { App } from './components/app'
import { movies, movieOverview } from './mocks'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App movies={movies} movieOverview={movieOverview} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
