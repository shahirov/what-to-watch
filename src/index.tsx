import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/app'
import { movies } from './mocks/movies'

ReactDOM.render(<App movies={movies} />, document.getElementById('root'))
