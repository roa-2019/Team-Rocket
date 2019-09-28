import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import Nose1 from './rocket-parts/nose-parts/Nose1';
import Nose2 from './rocket-parts/nose-parts/Nose2';
import Nose3 from './rocket-parts/nose-parts/Nose3';
import Body1 from './rocket-parts/body-parts/Body1';
import Body2 from './rocket-parts/body-parts/Body2';
import Body3 from './rocket-parts/body-parts/Body3';
import Body4 from './rocket-parts/body-parts/Body4';
import Window1 from './rocket-parts/window-parts/Window1'
import Window2 from './rocket-parts/window-parts/Window2'
import Window3 from './rocket-parts/window-parts/Window3'
import Window4 from './rocket-parts/window-parts/Window4'

class Rockets extends Component {

  render() {
    
    return (
      <Fragment>
        <div className='rocket rocket-panel col'>

          
          <div className="rocket-wrapper b">

            <svg height='800' width='800' id="rocket-1">
              {/* Wings */}

              {/* Right wing 2 rectangle slightly off */}
              <polygon points="340 440 390 460 380 550 340 550" fill='grey' stroke='black' strokeWidth='1' />
              {/* Left wing 2 rectangle slightly off  */}
              <polygon points="240 440 190 460 200 550 240 550" fill='grey' stroke='black' strokeWidth='1' />

              {/* Rocket nose 1  */}
              {this.props.noseShape == 'Circle' && <Nose1 />}
              {this.props.noseShape == 'Triangle' && <Nose2 />}
              {this.props.noseShape == 'LongTriangle' && <Nose3 />}
              
              {/* Rocket body 1  */}
              {this.props.bodyShape == 'Rectangle' && <Body1 />}
              {this.props.bodyShape == 'Trapazoid' && <Body2 />}
              {this.props.bodyShape == 'Pillar' && <Body3 />}
              {this.props.bodyShape == 'Body4' && <Body4 />}
              

              {/*Rocket thruster 1 */}
              <polygon points='320 500 300 540 280 540 260 500' fill='grey' stroke='black' strokeWidth='1' />

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
