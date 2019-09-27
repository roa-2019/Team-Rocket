import React, { Component, Fragment } from 'react'

class Nose5 extends Component {
    render() {
        return (
            <div>
                {/* Long nose triangle with circle window and dot in the middle 5 */}
                <polygon points="240 200 290 80 340 200" fill="grey" stroke='black' strokeWidth='1' />
                <circle cx='290' cy='170' r='20' fill='aqua' stroke='black' strokeWidth='1' />
                <circle cx='290' cy='170' r='4' fill='black' />
            </div>

        )
    }
}


export default Nose5