import React, { Component, Fragment } from 'react'

class Body2 extends Component {
    render() {
        return (
            <div>
                {/* Body 2 trapazoid */}
                <polygon points="200 200 380 200 360 350 220 350 " fill='grey' stroke='black' strokeWidth='1' />
                <polygon points="240 500 340 500 360 350 220 350" fill='grey' stroke='black' strokeWidth='1' />
            </div>

        )
    }
}


export default Body2