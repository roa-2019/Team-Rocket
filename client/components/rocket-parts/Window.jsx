import React, { Component, Fragment } from 'react'

class Window extends Component {
    render() {
        return (
            <div>
                {/*<!-- Window set 1 long, squares and circles (top to bottom) (clockwise) --> */}
                <circle cx='290' cy='260' r='10' fill='aqua' stroke='black' stroke-width='1' fill='grey' />
                <circle cx='290' cy='440' r='10' fill='aqua' stroke='black' stroke-width='1' fill='grey' />
                <polygon points='300 260 300 280 280 280 280 260' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 280 300 300 280 300 280 280' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 300 300 320 280 320 280 300' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 320 300 340 280 340 280 320' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 340 300 360 280 360 280 340' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 360 300 380 280 380 280 360' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 380 300 400 280 400 280 380' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 400 300 420 280 420 280 400' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='300 420 300 440 280 440 280 420' fill='aqua' stroke='black' stroke-width='1' />

                {/* Window set 2 three large circle windows with decent border */}
                <circle cx='290' cy='300' r='20' fill='aqua' stroke='black' stroke-width='4' fill='grey' stroke-opacity='.4' />
                <circle cx='290' cy='370' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
                <circle cx='290' cy='440' r='20' fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />

                {/* Window set 3 three medium size rectangle windows with decent border */}
                <polygon points="270 290 310 290 310 310 270 310" fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
                <polygon points="270 340 310 340 310 360 270 360" fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />
                <polygon points="270 390 310 390 310 410 270 410" fill='aqua' stroke='black' stroke-width='4' stroke-opacity='.4' />

                {/* Window set 4 two large y axis rectangle panels no fill color only border */}
                <polygon points="270 410 310 410 310 340 270 340" fill='grey' stroke='black' stroke-width='1' fill-opacity='.0' />
                <polygon points="270 420 310 420 310 490 270 490" fill='grey' stroke='black' stroke-width='1' fill-opacity='.0' />
            </div>

        )
    }
}


export default Window















