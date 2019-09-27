import React, { Component, Fragment } from 'react'

class Wing2 extends Component {
    render() {
        return (
            <div>
                {/* Right wing 2 rectangle slightly off */}
                <polygon points="340 440 390 460 380 550 340 550" fill='grey' stroke='black' stroke-width='1' />
                {/* Left wing 2 rectangle slightly off  */}
                <polygon points="240 440 190 460 200 550 240 550" fill='grey' stroke='black' stroke-width='1' />
            </div>

        )
    }
}


export default Wing2