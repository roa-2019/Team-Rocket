import React, { Component, Fragment } from 'react'

class Thruster3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Thruster 3 upside down trapezoid */}
                <polygon points='320 500 300 540 280 540 260 500' fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1'  />
            </Fragment>
        )
    }
}

export default Thruster3