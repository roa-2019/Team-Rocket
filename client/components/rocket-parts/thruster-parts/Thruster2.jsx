import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Thruster2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Thruster 2 trapezoid */}
                <polygon points='320 500 350 540 230 540 260 500' fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
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


export default connect(mapStateToProps)(Thruster2)