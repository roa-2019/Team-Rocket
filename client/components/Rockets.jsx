import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { Nose1, Nose2, Nose3 } from './rocket-parts/indexParts'
import { Body1, Body2, Body3, Body4 } from './rocket-parts/indexParts'
import { Wing1, Wing3, Wing4, Wing5 } from './rocket-parts/indexParts'
import { Window1, Window2, Window3, Window4 } from './rocket-parts/indexParts'
import { Thruster1, Thruster2, Thruster3, Thruster4 } from './rocket-parts/indexParts'


class Rockets extends Component {

  render() {
    
    return (
      <Fragment>
        <div className='rocket rocket-panel col'>
          
          <div className="rocket-wrapper b">

            <svg height='800' width='800' id="rocket-1">
              {/* Wings */}
              {this.props.wingShape == 'Paralelogram' && <Wing1 />}
              {this.props.wingShape == 'SmallParalelogram' && <Wing3 />}
              {this.props.wingShape == 'SmallTriangle' && <Wing4 />}
              {this.props.wingShape == 'Large' && <Wing5 />}
            
              {/* Rocket nose 1  */}
              {this.props.noseShape == 'Ellipse' && <Nose1 />}
              {this.props.noseShape == 'Pyramid' && <Nose2 />}
              {this.props.noseShape == 'Triangular' && <Nose3 />}
              {this.props.noseShape == 'Top Window' && <Nose4 />}
              
              {/* Rocket body 1  */}
              {this.props.bodyShape == 'Rectangle' && <Body1 />}
              {this.props.bodyShape == 'Trapezoid' && <Body2 />}
              {this.props.bodyShape == 'Hexagon' && <Body3 />}
              {this.props.bodyShape == 'Tower' && <Body4 />}

              {/*Rocket thruster 1 */}
              {this.props.thrusterShape == 'Thruster1' && <Thruster1 />}
              {this.props.thrusterShape == 'Thruster2' && <Thruster2 />}
              {this.props.thrusterShape == 'Thruster3' && <Thruster3 />}
              {this.props.thrusterShape == 'Thruster4' && <Thruster4 />}

              {/*Rocket Window changes */}
              {this.props.windowShape == 'longWindowSet' && <Window1 />}
              {this.props.windowShape == 'threeLargeCircularWindows' && <Window2 />}
              {this.props.windowShape == 'threeMediumRectangularWindows' && <Window3 />}
              {this.props.windowShape == 'twoLargePanels' && <Window4 />}
            </svg>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {

  return {
    noseShape: state.rocket.noseShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor,
    bodyShape: state.rocket.bodyShape,
    wingShape: state.rocket.wingShape,
    windowShape: state.rocket.windowShape,
    thrusterShape: state.rocket.thrusterShape
  }
}

export default connect(mapStateToProps)(Rockets)
