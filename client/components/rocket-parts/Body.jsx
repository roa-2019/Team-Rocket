import React, { Component, Fragment } from 'react';

class Body extends Component {
  render() {
    return (
      <Fragment>
        {this.props.bodyShape == 'Rectangle' && (
          <polygon
            points='240 200 340 200 340 500 240 500'
            fill={this.props.changeColor}
            stroke={this.props.strokeColor}
            strokeWidth='1'
          />
        )}

        {this.props.bodyShape == 'Trapezoid' && (
          <>
            <polygon
              points='200 200 380 200 360 350 220 350 '
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
            <polygon
              points='240 500 340 500 360 350 220 350'
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
          </>
        )}

        {this.props.bodyShape == 'Hexagon' && (
          <>
            <polygon
              points='240 200 340 200 380 280 200 280'
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
            <polygon
              points='240 500 340 500 380 280 200 280'
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
          </>
        )}

        {this.props.bodyShape == 'Tower' && (
          <>
            <polygon
              points='220 220 360 220 340 200 240 200 '
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
            <polygon
              points='220 220 240 240 340 240 360 220'
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
            <polygon
              points='240 240 340 240 340 500 240 500'
              fill={this.props.changeColor}
              stroke={this.props.strokeColor}
              strokeWidth='1'
            />
          </>
        )}
      </Fragment>
    );
  }
}

export default Body;
