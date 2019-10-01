import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Body, Nose, Wing, Thruster, Window } from './rocket-parts/indexParts'
import Launch from './Launch'
import  JvBot from './JvBot'

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
        <div className={"rocket rocket-panel col"+ (this.props.isRocketComplete && ' rocket-launch')} >

          <div className="rocket__container b">
            <svg height="800" width="800" id="rocket-1">
              {/* Wings */}
              <Wing wingShape ={wingShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/* Rocket nose  */}
              <Nose noseShape ={noseShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/* Rocket body  */}
              <Body bodyShape ={bodyShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/*Rocket thruster */}
              <Thruster thrusterShape ={thrusterShape} changeColor={changeColor} strokeColor={strokeColor} />

              {/*Rocket Window changes */}
              <Window windowShape ={windowShape} changeColor={changeColor} strokeColor={strokeColor} />
            </svg>
            <Launch />
          </div>

          <div className="robot__container b">
            
            <div className='robot__container--JvBot b'>
              {/* <img className="robot-img" src="/images/atlas_w_spot-min-450.png" alt="placeholder" /> */}
              <JvBot />
            </div>

            <div className='robot__error'>
              {this.props.bodyShape == "Rectangle" && <p className="robot__error--bodyShape">"Do you see me? How am I supposed to fit into such a thin Rocket?!"</p>}
              {this.props.noseShape == "Pyramid" && <p className="robot__error--nose">"Oops you'll have to choose a nose that isn't wonky"</p>}
              {this.props.wingShape == "SmallTriangle" && <p className="robot__error--wing typewriter b">"The Rocket will not take off with wings that small"</p>}
              {this.props.thrusterShape == 'Thruster1' && <p className="robot__error--thruster">"Oh no, that's way too small - your're going to have to choose another one"</p>}
              {this.props.windowShape == "twoLargePanels" && <p className="robot__error--window b">"There's no glass in these windows, I'll get sucked into Space!"</p>}
              {this.props.changeColor == "chuckNorris" && <p>"Chuck Norris?! Yeaaaahh Buddy!!</p>}
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
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(Rockets);


