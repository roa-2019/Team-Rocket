import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Rockets extends Component {

  render() {
    return (
      <Fragment>
        <div className='rocket rocket-panel col b'>

          <div className="rocket-wrapper b">

            <svg height='800' width='800' id="rocket-1">
              {/* Wings */}

              {/* Right wing 2 rectangle slightly off */}
              <polygon points="340 440 390 460 380 550 340 550" fill='grey' stroke='black' stroke-width='1' />
              {/* Left wing 2 rectangle slightly off  */}
              <polygon points="240 440 190 460 200 550 240 550" fill='grey' stroke='black' stroke-width='1' />

              {/* Rocket nose 1  */}
              {this.props.noseShape == 'Circle' && <ellipse cx="290" cy="210" rx="50" ry='100' stroke="black" stroke-width="1" fill={this.props.changeColor} />}

              {/* Rocket body 1  */}
              <polygon points="240 200 340 200 340 500 240 500" fill='grey' stroke='black' stroke-width='1' />
              <circle cx='290' cy='300' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
              <circle cx='290' cy='370' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
              <circle cx='290' cy='440' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />

              {/*Rocket thruster 1 */}
              <polygon points='320 500 300 540 280 540 260 500' fill='grey' stroke='black' stroke-width='1' />
            </svg>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {

  return {
    noseShape: state.noseShape,
    changeColor: state.changeColor,
    bodyShape: state.bodyShape,
    wingShape: state.wingShape,
    windowShape: state.windowShape,
    thrusterShape: state.thrusterShape
  }
}

export default connect(mapStateToProps)(Rockets)
