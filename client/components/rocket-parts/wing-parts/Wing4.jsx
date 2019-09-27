import React, { Component, Fragment } from 'react'

class Wing4 extends Component {
    render() {
        return (
            <div>
                {/* Right wing 4 small triangle */}
                <polygon points="340 460 380 500 340 500" fill='grey' stroke='black' strokeWidth='1' />
                {/* Left wing 4 small triangle */}
                <polygon points="240 460 200 500 240 500" fill='grey' stroke='black' strokeWidth='1' />
            </div>

        )
    }
}


export default Wing4