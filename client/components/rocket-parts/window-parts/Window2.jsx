import React, { Component, Fragment } from 'react'

class Window2 extends Component {
    render() {
        return (
            <div>
                {/* Window set 2 three large circle windows with decent border */}
                <circle cx='290' cy='300' r='20' fill='aqua' stroke='black' stroke-width='4' fill='grey' stroke-opacity='.4' />
                <circle cx='290' cy='370' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
                <circle cx='290' cy='440' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
            </div>

        )
    }
}


export default Window2