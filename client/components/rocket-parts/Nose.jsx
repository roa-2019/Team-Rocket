import React, { Component, Fragment } from "react";

class Nose extends Component {
  render() {
    return (
      <Fragment>
        {
          (this.props.noseShape == "Ellipse" && (
            <>
              <ellipse
                id="ellipse"
                cx="290"
                cy="210"
                rx="50"
                ry="100"
                stroke={this.props.strokeColor}
                strokeWidth="1"
                fill={this.props.changeColor}
              />
            </>
          ))
        }

        {
          (this.props.noseShape == "Pyramid" && (
            <>
              <polygon
                points="700,355 700,0 0,700"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }

        {
          (this.props.noseShape == "Triangular" && (
            <>
              <polygon
                points="240 200 290 80 340 200"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
            </>
          ))
        }

        {
          (this.props.noseShape == "Top Window" && (
            <>
              <polygon
                points="240 200 290 80 340 200"
                fill={this.props.changeColor}
                stroke={this.props.strokeColor}
                strokeWidth="1"
              />
              <polygon
                points="280 150 300 150 300 190 280 190"
                stroke={this.props.strokeColor}
                strokeWidth="1"
                fill="aqua"
              />
            </>
          ))
        }
      </Fragment>
    );
  }
}

export default Nose;
