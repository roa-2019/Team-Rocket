import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import SpeechBubble from './SpeechBubble'
import { Body, Nose, Wing, Thruster, Window } from './rocket-parts/indexParts'
import Launch from './Launch'
import JvBot from './JvBot'

class Rockets extends Component {
  RocketAnimation() {
    var rocketStatus = this.props.isRocketComplete;
    if (rocketStatus == true) {
      return
    }
  }
  render() {
    let { changeColor, strokeColor, wingShape, noseShape, bodyShape, thrusterShape, windowShape } = this.props
    return (
      <Fragment>
        <div className={"rocket rocket-panel col" + (this.props.isRocketComplete && ' rocket-launch')} >

          <div className="rocket__container">
            <svg height="590" width="500" id="rocket-1">
              {/* Wings */}
              <Wing wingShape={wingShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/* Rocket nose  */}
              <Nose noseShape={noseShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/* Rocket body  */}
              <Body bodyShape={bodyShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/*Rocket thruster */}
              <Thruster thrusterShape={thrusterShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/*Rocket Window changes */}
              <Window windowShape={windowShape} changeColor={changeColor} strokeColor={strokeColor} />
            </svg>
            <Launch />
          </div>

          <div className="robot__container b">

            <div className='robot__wrapper--JvBot b'>
              <JvBot />
            </div>

            <div className='robot__error b'>
              <SpeechBubble />
              <div className='speechBubble__text'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </div>
            </div>

          </div>

        </div>
      </Fragment>
    );
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
  };
}

export default connect(mapStateToProps)(Rockets);


