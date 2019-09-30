import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { Body1, Body2, Body3, Body4 } from "./rocket-parts/indexParts";
import { Nose1, Nose2, Nose3, Nose4 } from "./rocket-parts/indexParts";
import { Thruster1, Thruster2, Thruster3, Thruster4 } from "./rocket-parts/indexParts";
import { Wing1, Wing3, Wing4, Wing5 } from "./rocket-parts/indexParts";
import { Window1, Window2, Window3, Window4 } from "./rocket-parts/indexParts";
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
              {wingShape == "Paralelogram" && <Wing1 changeColor={changeColor} strokeColor={strokeColor} />}
              {wingShape == "SmallParalelogram" && <Wing3 changeColor={changeColor} strokeColor={strokeColor} />}
              {wingShape == "SmallTriangle" && <Wing4 changeColor={changeColor} strokeColor={strokeColor} />}
              {wingShape == "Large" && <Wing5 changeColor={changeColor} strokeColor={strokeColor} />}

              {/* Rocket nose  */}
              {noseShape == "Ellipse" && <Nose1 changeColor={changeColor} strokeColor={strokeColor} />}
              {noseShape == "Pyramid" && <Nose2 changeColor={changeColor} strokeColor={strokeColor} />}
              {noseShape == "Triangular" && <Nose3 changeColor={changeColor} strokeColor={strokeColor} />}
              {noseShape == "Top Window" && <Nose4 changeColor={changeColor} strokeColor={strokeColor} />}

              {/* Rocket body  */}
              {bodyShape == "Rectangle" && <Body1 changeColor={changeColor} strokeColor={strokeColor} />}
              {bodyShape == "Trapezoid" && <Body2 changeColor={changeColor} strokeColor={strokeColor} />}
              {bodyShape == "Hexagon" && <Body3 changeColor={changeColor} strokeColor={strokeColor} />}
              {bodyShape == "Tower" && <Body4 changeColor={changeColor} strokeColor={strokeColor} />}

              {/*Rocket thruster */}
              {thrusterShape == "Thruster1" && <Thruster1 changeColor={changeColor} strokeColor={strokeColor} />}
              {thrusterShape == "Thruster2" && <Thruster2 changeColor={changeColor} strokeColor={strokeColor} />}
              {thrusterShape == "Thruster3" && <Thruster3 changeColor={changeColor} strokeColor={strokeColor} />}
              {thrusterShape == "Thruster4" && <Thruster4 changeColor={changeColor} strokeColor={strokeColor} />}

              {/*Rocket Window changes */}
              {windowShape == "longWindowSet" && <Window1 strokeColor={strokeColor} />}
              {windowShape == "threeLargeCircularWindows" && <Window2 strokeColor={strokeColor} />}
              {windowShape == "threeMediumRectangularWindows" && <Window3 strokeColor={strokeColor} />}
              {windowShape == "twoLargePanels" && <Window4 strokeColor={strokeColor} />}
            </svg>
          </div>

          <div className = 'JvBot b'>
            <JvBot />
            {this.props.wingShape == "SmallTriangle" && <p className="robot__error--wing typewriter b">"The Rocket will not take off with wings that small"</p>}
            {this.props.noseShape == "Pyramid" && <p className= "robot__error--nose">"Oops you'll have to choose a nose that isn't wonky"</p>}
            {this.props.thrusterShape == 'Thruster1' && <p className = "robot__error--thruster">"That does not appear to be a thruster. Try another one."</p> }
            {this.props.bodyShape == "Rectangle" && <p className="robot__error--bodyShape">"Do you see me? How am I supposed to fit into such a thin Rocket?!"</p>}
            {this.props.windowShape == "twoLargePanels" && <p className="robot__error--window b">"There's no glass in these windows, I'll get sucked into Space!"</p>} 
            {this.props.changeColor == "chuckNorris" && <p>"Chuck Norris?! Yeaaaahh Buddy!!</p> }
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


