import React, { Component, Fragment } from 'react'

class Rocket extends Component {
  render() {
    return (
      <Fragment>
        <div className='rocket'>
          <div className="details-panel col b">
            <p>left panel</p>
          </div>
          <div className="rocket-panel col b">
      <div className="rocket-wrapper">
        <div className="rocket-nose third b"></div>
        <div className="rocket-body third b"></div>
        <div className="rocket-fins third b"></div>
      </div>
          </div>

        </div>
      </Fragment>
    )
  }
}

export default Rocket