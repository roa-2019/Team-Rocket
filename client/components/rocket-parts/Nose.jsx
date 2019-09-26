import React, { Component, Fragment } from 'react'

class Nose extends Component {
    render() {
        return (
            <div>
                {/*<!-- Nose circle --> */}
                <ellipse cx="290" cy="210" rx="50" ry='100' stroke="black" stroke-width="1" fill="grey" />
                {/* Nose equal triangle */}
                <polygon points="240 200 290 120 340 200" fill="grey" stroke='black' stroke-width='1' />
                {/* Nose long triangle */}
                <polygon points="240 200 290 80 340 200" fill="grey" stroke='black' stroke-width='1' />
                {/* long Nose triangle with square window */}
                <polygon points="240 200 290 80 340 200" fill="grey" stroke='black' stroke-width='1' />
                <polygon points='280 150 300 150 300 190 280 190' stroke='black' stroke-width='1' fill='aqua' />
                {/* Long nose triangle with circle window and dot in the middle */}
                <polygon points="240 200 290 80 340 200" fill="grey" stroke='black' stroke-width='1' />
                <circle cx='290' cy='170' r='20' fill='aqua' stroke='black' stroke-width='1' />
                <circle cx='290' cy='170' r='4' fill='black' />
            </div>

        )
    }
}


export default Nose