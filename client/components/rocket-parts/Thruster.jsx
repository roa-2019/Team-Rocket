import React, { Component, Fragment } from "react";

class Thruster extends Component {
  render() {
    return (
      <Fragment>
        {
          (this.props.thrusterShape = "Thruster1" && (
            <>
              <polygon
                points="530 500 330 520 50 520 250 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
        {
          (this.props.thrusterShape = "Thruster2" && (
            <>
              <polygon
                points="320 500 350 540 230 540 260 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
        {
          (this.props.thrusterShape = "Thruster3" && (
            <>
              <polygon
                points="320 500 300 540 280 540 260 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
        {
          (this.props.thrusterShape = "Thruster4" && (
            <>
              <polygon
                points="240 500 340 500 380 570 290 530 200 570"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
      </Fragment>
    );
  }
}

export default Thruster;
