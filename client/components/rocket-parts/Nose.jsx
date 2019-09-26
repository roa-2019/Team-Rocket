import React, { Component, Fragment } from 'react'

class Nose extends Component {
    render() {
        return (
            <div>
                {/*<!-- Nose circle --> */}
                <ellipse cx="290" cy="210" rx="50" ry='100' stroke="black" stroke-width="1" fill="grey" />
                {/* Nose equal triangle */}
                <polygon points="240 200 290 120 340 200" fill="grey" stroke='black' stroke-width='1'  />
                {/* Nose long triangle */}
                <polygon points="240 200 290 80 340 200" fill="grey" stroke='black' stroke-width='1'  />
                {/* Nose with panel */}
            </div>

        )
    }
}


export default Nose