import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Body4 extends Component {
    render() {
        return (
            <Fragment>
                {/* Body 4 with thing on top Tower */}
                <polygon points='220 220 360 220 340 200 240 200 ' fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                <polygon points='220 220 240 240 340 240 360 220' fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                <polygon points="240 240 340 240 340 500 240 500" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
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


export default connect(mapStateToProps)(Body4)