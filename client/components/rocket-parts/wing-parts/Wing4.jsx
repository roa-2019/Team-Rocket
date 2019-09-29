import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Wing4 extends Component {
    render() {
        return (
            <Fragment>
                {/* Right wing 4 small triangle */}
                <polygon points="340 460 380 500 340 500" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                {/* Left wing 4 small triangle */}
                <polygon points="240 460 200 500 240 500" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor,
        strokeColor: state.rocket.strokeColor
    }
    
}

export default connect(mapStateToProps)(Wing4)