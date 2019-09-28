import React, { Component, Fragment } from 'react'

class Window2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Window set 2 three large circle windows with decent border */}
                <circle cx='290' cy='300' r='20' fill='aqua' stroke='black' strokeWidth='4' fill='aqua' strokeOpacity='.4' />
                <circle cx='290' cy='370' r='20' fill='aqua' stroke='black' strokeWidth='4' strokeOpacity='.4' />
                <circle cx='290' cy='440' r='20' fill='aqua' stroke='black' strokeWidth='4' strokeOpacity='.4' />
            </Fragment>

        )
    }
}


export default Window2