import React, { Component, Fragment } from 'react'

import LandingPage from './LandingPage'
import Design from './Design'
import Rocket from './Rocket'

class App extends React.Component {
  
  render () {
    return (
     <Fragment>
       <LandingPage />
       <Design />
       <Rocket />
     </Fragment>
    )
  }
}

export default App
