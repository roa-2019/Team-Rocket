import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Wing5 extends Component {
    render() {
        return (
            <Fragment>
                {/* Right wing 5 large big shapes */}
                <polygon points="340 260 440 300 450 560 400 360 340 350" fill={this.props.changeColor}stroke={this.props.strokeColor} strokeWidth='1' />
                {/* Left wing 5 large big shapes */}
                <polygon points='240 260 140 300 150 560 180 360 240 350' fill={this.props.changeColor}stroke={this.props.strokeColor} strokeWidth='1' />
            </Fragment>

        )
    }
}


function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor,
        strokeColor: state.rockect.strokeColor
    }
    
}

export default connect(mapStateToProps)(Wing5)