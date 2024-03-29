import React, { Component, Fragment } from 'react'

class SpeechBubble extends Component {
    render() {
        return (
            <Fragment>
                <svg className ='speechBubble'width="350" height="170" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <polygon points="50 50 100 20 0 0" fill="lightgrey"  />
                    <rect width='300' height="150" ry='20' fill="lightgrey" x="50" y="20"/>
                </svg>
            </Fragment>
        )
    }
}

export default SpeechBubble
