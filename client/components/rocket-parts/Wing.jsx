import React, { Component, Fragment } from 'react'

class Wing extends Component {
    render() {
        return (
            <div>
                {/* Right Wing 1 paralelogram (clockwise)--> */}
                <polygon points="340 270 430 440 430 580 340 410" fill='grey' stroke='black' stroke-width='1' />
                {/*<!-- Left Wing 1 paralelogram (mirror right wing) --> */}
                <polygon points="240 270 150 440 150 580 240 410" fill='grey' stroke='black' stroke-width='1' ry='1' />
                {/* Right wing 2 rectangle slightly off */}
                <polygon points="340 440 390 460 380 550 340 550" fill='grey' stroke='black' stroke-width='1' />
                {/* Left wing 2 rectangle slightly off  */}
                <polygon points="240 440 190 460 200 550 240 550" fill='grey' stroke='black' stroke-width='1' />
                {/* Right wing 3 small paralelogram */}
                <polygon points="340 440 400 500 400 560 340 500" fill='grey' stroke='black' stroke-width='1' />
                {/* Left wing 3 small paralelogram */}
                <polygon points="240 440 180 500 180 560 240 500" fill='grey' stroke='black' stroke-width='1' />
                {/* Right wing 4 small triangle */}
                <polygon points="340 460 380 500 340 500" fill='grey' stroke='black' stroke-width='1' />
                {/* Left wing 4 small triangle */}
                <polygon points="240 460 200 500 240 500" fill='grey' stroke='black' stroke-width='1' />
            </div>

        )
    }
}


export default Wing