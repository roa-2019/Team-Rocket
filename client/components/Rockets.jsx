import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import Nose1 from './rocket-parts/nose-parts/Nose1';
import Nose2 from './rocket-parts/nose-parts/Nose2';
import Nose3 from './rocket-parts/nose-parts/Nose3';
import Nose4 from './rocket-parts/nose-parts/Nose4';
import Nose5 from './rocket-parts/nose-parts/Nose5';

import Body1 from './rocket-parts/body-parts/Body1';
import Body2 from './rocket-parts/body-parts/Body2';
import Body3 from './rocket-parts/body-parts/Body3';
import Body4 from './rocket-parts/body-parts/Body4';

import Window1 from './rocket-parts/window-parts/Window1'
import Window2 from './rocket-parts/window-parts/Window2'
import Window3 from './rocket-parts/window-parts/Window3'
import Window4 from './rocket-parts/window-parts/Window4'

import Wing1 from './rocket-parts/wing-parts/Wing1';
import Wing3 from './rocket-parts/wing-parts/Wing3';
import Wing4 from './rocket-parts/wing-parts/Wing4';
import Wing5 from './rocket-parts/wing-parts/Wing5';

import Thruster1 from './rocket-parts/thruster-parts/Thruster1';
import Thruster2 from './rocket-parts/thruster-parts/Thruster2';
import Thruster3 from './rocket-parts/thruster-parts/Thruster3';
import Thruster4 from './rocket-parts/thruster-parts/Thruster4';

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
    bodyShape: state.rocket.bodyShape,
    wingShape: state.rocket.wingShape,
    windowShape: state.rocket.windowShape,
    thrusterShape: state.rocket.thrusterShape
  }
}

export default connect(mapStateToProps)(Rockets)
