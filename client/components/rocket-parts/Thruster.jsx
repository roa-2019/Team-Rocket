import React, { Component, Fragment } from 'react'

class Thruster extends Component {
    render() {
        return (
            <div>
                {/*<!-- Thruster 1 box (clockwise) --> */}
                <polygon points='330 500 330 520 250 520 250 500' fill='gray' stroke='black' stroke-width='1' />
            </div>

        )
    }
}


export default Thruster