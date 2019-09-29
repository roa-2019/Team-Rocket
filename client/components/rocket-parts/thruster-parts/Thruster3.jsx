import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Thruster3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Thruster 3 upside down trapezoid */}
                <polygon points='320 500 300 540 280 540 260 500' fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1'  />
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

export default connect(mapStateToProps)(Thruster3)