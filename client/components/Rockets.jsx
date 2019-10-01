import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'

import { Body, Nose, Wing, Thruster, Window } from './rocket-parts/indexParts'
import Launch from './Launch'
import  JvBot from './JvBot'

class Rockets extends Component {
  render() {
    let { changeColor, strokeColor, wingShape, noseShape, bodyShape, thrusterShape, windowShape } = this.props
    return (
      <Fragment>
        <div className="rocket rocket-panel col">

          <div className="rocket-wrapper b">
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
              <Window windowShape ={windoeShape} changeColor={changeColor} strokeColor={strokeColor} />
            </svg>
            <Launch />
          </div>

          <div className = 'JvBot b'>
            <JvBot />
            {this.props.wingShape == "SmallTriangle" && <p className="robot__error--wing typewriter b">"The Rocket will not take off with wings that small"</p>}
            {this.props.noseShape == "Pyramid" && <p className= "robot__error--nose">"Oops you'll have to choose a nose that isn't wonky"</p>}
            {this.props.thrusterShape == 'Thruster1' && <p className = "robot__error--thruster">"That does not appear to be a thruster. Try another one."</p> }
            {this.props.bodyShape == "Rectangle" && <p className="robot__error--bodyShape">"Do you see me? How am I supposed to fit into such a thin Rocket?!"</p>}
            {this.props.windowShape == "twoLargePanels" && <p className="robot__error--window b">"There's no glass in these windows, I'll get sucked into Space!"</p>} 
            {this.props.changeColor == "chuckNorris" && <p>"Chuck Norris?! Yeaaaahh Buddy!!<br/>Who knew that chuck norris red was a thing?<br/> chucknorris == RGB (c00c 0000 0000)</p> }
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
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(Rockets);


