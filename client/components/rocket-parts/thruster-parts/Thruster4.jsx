import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Thruster5 extends Component {
    render() {
        return (
            <Fragment>
                {/* Thruster 5 big bottom */}
                <polygon points="240 500 340 500 380 570 290 530 200 570" fill={this.props.changeColor} stroke = {this.props.strokeColor} strokeWidth='1'/>
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


export default connect(mapStateToProps)(Thruster5)