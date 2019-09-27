import React, { Component, Fragment } from 'react'

class Wing1 extends Component {
    render() {
        return (
            <div>
                {/* Right Wing 1 paralelogram (clockwise)--> */}
                <polygon points="340 270 430 440 430 580 340 410" fill='grey' stroke='black' strokeWidth='1' />
                {/*<!-- Left Wing 1 paralelogram (mirror right wing) --> */}
                <polygon points="240 270 150 440 150 580 240 410" fill='grey' stroke='black' strokeWidth='1' ry='1' />
            </div>

        )
    }
}


export default Wing1