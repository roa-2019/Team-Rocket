import React, { Component, Fragment } from "react";

class Window extends Component {
  render() {
    return (
      <Fragment>
        {this.props.windowShape == "longWindowSet" && (
          <>
            <circle
              cx="290"
              cy="260"
              r="10"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
              fill="grey"
            />
            <circle
              cx="290"
              cy="440"
              r="10"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
              fill="grey"
            />
            <polygon
              points="300 260 300 280 280 280 280 260"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 280 300 300 280 300 280 280"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 300 300 320 280 320 280 300"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 320 300 340 280 340 280 320"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 340 300 360 280 360 280 340"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 360 300 380 280 380 280 360"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 380 300 400 280 400 280 380"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 400 300 420 280 420 280 400"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
            <polygon
              points="300 420 300 440 280 440 280 420"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="1"
            />
          </>
        )}
        {this.props.windowShape == "threeLargeCircularWindows" && (
          <>
            <circle
              cx="290"
              cy="300"
              r="20"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              fill="aqua"
              strokeOpacity=".4"
            />
            <circle
              cx="290"
              cy="370"
              r="20"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              strokeOpacity=".4"
            />
            <circle
              cx="290"
              cy="440"
              r="20"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              strokeOpacity=".4"
            />
          </>
        )}
        {this.props.windowShape == "threeMediumRectangularWindows" && (
          <>
            <polygon
              points="270 290 310 290 310 310 270 310"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              strokeOpacity=".4"
            />
            <polygon
              points="270 340 310 340 310 360 270 360"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              strokeOpacity=".4"
            />
            <polygon
              points="270 390 310 390 310 410 270 410"
              fill="aqua"
              stroke={this.props.strokeColor}
              strokeWidth="4"
              strokeOpacity=".4"
            />
          </>
        )}
        {this.props.windowShape == "twoLargePanels" && (
          <>
            <polygon
              points="270 410 310 410 310 340 270 340"
              fill="grey"
              stroke={this.props.strokeColor}
              strokeWidth="1"
              fillOpacity=".0"
            />
            <polygon
              points="270 420 310 420 310 490 270 490"
              fill="grey"
              stroke={this.props.strokeColor}
              strokeWidth="1"
              fillOpacity=".0"
            />
          </>
        )}
      </Fragment>
    );
  }
}

export default Window;
