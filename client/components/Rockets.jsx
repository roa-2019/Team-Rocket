import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { Body1, Body2, Body3, Body4 } from "./rocket-parts/indexParts";
import { Nose1, Nose2, Nose3, Nose4 } from "./rocket-parts/indexParts";
import { Thruster1, Thruster2, Thruster3, Thruster4 } from "./rocket-parts/indexParts";
import { Wing1, Wing3, Wing4, Wing5 } from "./rocket-parts/indexParts";
import { Window1, Window2, Window3, Window4 } from "./rocket-parts/indexParts";

class Rockets extends Component {
  render() {
    return (
      <Fragment>
        <div className="rocket rocket-panel col">
          <div className="rocket-wrapper b">
            <svg height="800" width="800" id="rocket-1">
              {/* Wings */}
              {this.props.wingShape == "Paralelogram" && <Wing1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.wingShape == "SmallParalelogram" && <Wing3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.wingShape == "SmallTriangle" && <Wing4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.wingShape == "Large" && <Wing5 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}

              {/* Rocket nose  */}
              {this.props.noseShape == "Ellipse" && <Nose1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.noseShape == "Pyramid" && <Nose2 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.noseShape == "Triangular" && <Nose3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.noseShape == "Top Window" && <Nose4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}

              {/* Rocket body  */}
              {this.props.bodyShape == "Rectangle" && <Body1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.bodyShape == "Trapezoid" && <Body2 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.bodyShape == "Hexagon" && <Body3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.bodyShape == "Tower" && <Body4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}

              {/*Rocket thruster */}
              {this.props.thrusterShape == "Thruster1" && <Thruster1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.thrusterShape == "Thruster2" && <Thruster2 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.thrusterShape == "Thruster3" && <Thruster3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.thrusterShape == "Thruster4" && <Thruster4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}

              {/*Rocket Window changes */}
              {this.props.windowShape == "longWindowSet" && <Window1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.windowShape == "threeLargeCircularWindows" && <Window2 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.windowShape == "threeMediumRectangularWindows" && <Window3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
              {this.props.windowShape == "twoLargePanels" && <Window4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />}
            </svg>
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
    strokeColor: state.rocket.changeColor
  };
}

export default connect(mapStateToProps)(Rockets);
