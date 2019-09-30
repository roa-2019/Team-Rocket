import React, { Component, Fragment } from 'react'

class Nose1 extends Component {
    render() {

           return (
            <Fragment>
                {/*<!-- Nose circle 1 --> */}
                <ellipse cx="290" cy="210" rx="50" ry='100' stroke={this.props.strokeColor} strokeWidth="1" fill={this.props.changeColor} />
            </Fragment>
        )
    }
}

export default Nose1