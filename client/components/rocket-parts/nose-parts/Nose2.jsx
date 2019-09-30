import React, { Component, Fragment } from 'react'

class Nose2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Nose equal triangle 2 */}
                <polygon points="700,355 700,0 0,700" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
            </Fragment>
        )
    }
}

export default Nose2