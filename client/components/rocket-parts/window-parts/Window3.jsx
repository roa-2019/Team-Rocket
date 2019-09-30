import React, { Component, Fragment } from 'react'

class Window3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Window set 3 three medium size rectangle windows with decent border */}
                <polygon points="270 290 310 290 310 310 270 310" fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' strokeOpacity='.4' />
                <polygon points="270 340 310 340 310 360 270 360" fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' strokeOpacity='.4' />
                <polygon points="270 390 310 390 310 410 270 410" fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' strokeOpacity='.4' />
            </Fragment>
        )
    }
}

export default Window3