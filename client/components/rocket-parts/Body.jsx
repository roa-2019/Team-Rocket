import React, { Component, Fragment } from 'react'

class Body extends Component {
    render() {
        return (
            <div>
                {/*<!-- Body 1 rectangle (clockwise beginning at top left) --> */}
                <polygon points="240 200 340 200 340 500 240 500" fill='grey' stroke='black' stroke-width='1' />
                {/* Body 2 trapazoid */}
                <polygon points="200 200 380 200 360 350 220 350 " fill='grey' stroke='black' stroke-width='1' />
                <polygon points="240 500 340 500 360 350 220 350" fill='grey' stroke='black' stroke-width='1' />
                {/* Body 3 pillar */}
                <polygon points="240 200 340 200 380 280 200 280" fill='grey' stroke='black' stroke-width='1' />
                <polygon points="240 500 340 500 380 280 200 280" fill='grey' stroke='black' stroke-width='1' />
                {/* Body 4 with thing on top */}
                <polygon points='220 220 360 220 340 200 240 200 ' fill='lightgrey' stroke='black' stroke-width='1' />
                <polygon points='220 220 240 240 340 240 360 220' fill='grey' stroke='black' stroke-width='1' />
                <polygon points="240 240 340 240 340 500 240 500" fill='grey' stroke='black' stroke-width='1' />
            </div>

        )
    }
}


export default Body