import React, { Component, Fragment } from 'react'

class Thruster extends Component {
    render() {
        return (
            <div>
                {/*<!-- Thruster 1 horizontal rectangle (clockwise) --> */}
                <polygon points='330 500 330 520 250 520 250 500' fill='gray' stroke='black' stroke-width='1' />
                {/* Thruster 2 trapezoid */}
                <polygon points='320 500 350 540 230 540 260 500' fill='grey' stroke='black' stroke-width='1' />
                {/* Thruster 3 upside down trapezoid */}
                <polygon points='320 500 300 540 280 540 260 500' fill='grey' stroke='black' stroke-width='1'  />
                {/* Thruster 4 square  */}
                <polygon points='310 500 310 540 270 540 270 500' fill='grey' stroke='black' stroke-width='1'  />
                {/* Thruster 5 big bottom */}
                <polygon points="240 500 340 500 380 570 290 530 200 570" fill='grey' stroke='black' stroke-width='1'/>
            </div>

        )
    }
}


export default Thruster