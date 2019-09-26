import React, { Component, Fragment } from 'react'

import LandingPage from './LandingPage'
import Rocket from './Rocket'
import Design from './Design'

class App extends Component {
  
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
