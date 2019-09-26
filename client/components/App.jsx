import React, { Component, Fragment } from 'react'

// import LandingPage from './LandingPage'
import Rockets from './Rockets'
import Design from './Design'

class App extends Component {
  
  render () {
    return (
     <Fragment>
       {/* <LandingPage /> */}
       <Design />

       <Rockets />
     </Fragment>
    )
  }
}

export default App
