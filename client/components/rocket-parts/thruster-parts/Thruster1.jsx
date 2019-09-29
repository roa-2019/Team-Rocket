import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Thruster1 extends Component {


    render() {
        return (
            <Fragment>
                {/*<!-- Thruster 1 horizontal rectangle (clockwise) --> */}
                <polygon points='330 500 330 520 250 520 250 500' fill =  {this.props.changeColor} stroke = {this.props.strokeColor} strokeWidth='1' />
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

export default connect(mapStateToProps)(Thruster1)