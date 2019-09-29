import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Wing3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Right wing 3 small paralelogram */}
                <polygon points="340 440 400 500 400 560 340 500" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                {/* Left wing 3 small paralelogram */}
                <polygon points="240 440 180 500 180 560 240 500" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
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


export default connect(mapStateToProps)(Wing3)