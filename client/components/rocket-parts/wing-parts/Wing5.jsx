import React, { Component, Fragment } from 'react'

class Wing5 extends Component {
    render() {
        return (
            <Fragment>
                {/* Right wing 5 large big shapes */}
                <polygon points="340 260 440 300 450 560 400 360 340 350" fill='grey' stroke='black' strokeWidth='1' />
                {/* Left wing 5 large big shapes */}
                <polygon points='240 260 140 300 150 560 180 360 240 350' fill='grey' stroke='black' strokeWidth='1' />
            </Fragment>

        )
    }
}


export default Wing5