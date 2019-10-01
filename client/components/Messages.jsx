import React, { Component, Fragment } from 'react'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import SpeechBubble from './SpeechBubble'
import messages from ('../messages.json')

class Messages extends Component {
    render() {
        return (
            <Fragment>
                <SpeechBubble />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    robot: state.rocket.robotMessage
}

export default connect(mapStateToProps)(Messages);