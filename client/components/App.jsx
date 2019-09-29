import React, { Component, Fragment } from 'react'

import LandingPage from './LandingPage'
import Rockets from './Rockets'
import Design from './Design'
import { connect } from 'react-redux'


class App extends Component {

  render () {

    return (
     <Fragment>

       { this.props.showLanding ? <LandingPage /> : <><Design /> <Rockets /> </> }

     </Fragment>
    )
  }
}

function mapStateToProps (state)  {
  return {
    showLanding: state.navigator
  }
}

export default connect (mapStateToProps)(App)