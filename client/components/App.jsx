import React, { Component, Fragment } from 'react'

import LandingPage from './LandingPage'
import Rockets from './Rockets'
import Design from './Design'
import { connect } from 'react-redux'

class App extends Component  {
  
  render () {
    console.log(this.props)
    return (
     <Fragment>
       { this.props.showLanding ? <LandingPage /> : <><Design /> <Rockets /> </> }
     </Fragment>
    )
  }
}

function MapStateToProps (state)  {
  return {
    showLanding: state.navigator
  }
}

export default connect (MapStateToProps)(App)