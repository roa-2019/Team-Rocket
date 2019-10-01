import React, { Component, Fragment } from 'react'

class SpeechBubble extends Component {
    render() {
        return (
            <Fragment>
                <svg width="250" height="170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <polygon points="50 100 100 150 0 170" fill="lightgrey" />
                    <rect width='200' height="150" ry='20' fill="lightgrey" x="50" y="0" />
                </svg>
            </Fragment>
        )
    }
}

export default SpeechBubble
