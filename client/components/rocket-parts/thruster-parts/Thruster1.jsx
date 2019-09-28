import React, { Component, Fragment } from 'react'

class Thruster1 extends Component {
    render() {
        return (
            <Fragment>
                {/*<!-- Thruster 1 horizontal rectangle (clockwise) --> */}
                <polygon points='330 500 330 520 250 520 250 500' fill='gray' stroke='black' strokeWidth='1' />
            </Fragment>

        )
    }
}


export default Thruster1