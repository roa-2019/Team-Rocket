import React, { Component, Fragment } from "react";

class Wing extends Component {
  render() {
    return (
      <Fragment>
        {
          (this.props.wingShape == "Paralelogram" && (
            <>
              <polygon
                points="340 270 430 440 430 580 340 410"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
              <polygon
                points="240 270 150 440 150 580 240 410"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
                ry="1"
              />
            </>
          ))
        }
        {
          (this.props.wingShape == "SmallParalelogram" && (
            <>
              <polygon
                points="340 440 400 500 400 560 340 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />

              <polygon
                points="240 440 180 500 180 560 240 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
        {
          (this.props.wingShape == "SmallTriangle" && (
            <>
              <polygon
                points="340 460 380 500 340 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
              <polygon
                points="240 460 200 500 240 500"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }
        {
          (this.props.wingShape == "Large" && (
            <>
              <polygon
                points="340 260 440 300 450 560 400 360 340 350"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
              <polygon
                points="240 260 140 300 150 560 180 360 240 350"
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

export default Wing;
