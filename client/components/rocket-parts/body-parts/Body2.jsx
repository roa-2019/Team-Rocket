import React, { Component, Fragment } from 'react'

class Body2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Body 2 trapezoid */}
                <polygon points="200 200 380 200 360 350 220 350 " fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                <polygon points="240 500 340 500 360 350 220 350" fill={this.props.changeColor}  stroke={this.props.strokeColor}  strokeWidth='1' />
            </Fragment>
        )
    }
}

export default Body2