import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import css from './css/main.scss'

import rocketReducer from './reducers/rocketreducer'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rocketReducer, composeEnhancers(
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
