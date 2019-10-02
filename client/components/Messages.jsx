import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Messages extends Component {
  render() {

    return (
      <Fragment>
        <p className='robot-messages'>{this.props.robot}</p>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    noseShape: state.rocket.noseShape,
    bodyShape: state.rocket.bodyShape,
    wingShape: state.rocket.wingShape,
    windowShape: state.rocket.windowShape,
    thrusterShape: state.rocket.thrusterShape,
    isRocketComplete: state.rocket.isRocketComplete,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor,
    robot: state.rocket.robotMessage
  }
}

export default connect(mapStateToProps)(Messages);