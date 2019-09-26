import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Rocket extends Component {
  render() {
    return (
      <Fragment>
        <div className='rocket rocket-panel col'>

          <div className="rocket-wrapper b">
            Rocket
          </div>

        </div>
      </Fragment>
    )
  }
}

export default connect()(Rocket)