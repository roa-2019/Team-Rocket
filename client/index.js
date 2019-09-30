import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
<<<<<<< HEAD

// DO NOT DELETE FOLLOWING LINE
=======
>>>>>>> 585d71698420dacc7adf953ec7592d79902a6df0
import css from './css/main.scss'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

export default store