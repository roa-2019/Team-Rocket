import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Wing1 extends Component {
    render() {
        return (
            <Fragment>
                {/* Right Wing 1 paralelogram (clockwise)--> */}
                <polygon points="340 270 430 440 430 580 340 410" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' />
                {/*<!-- Left Wing 1 paralelogram (mirror right wing) --> */}
                <polygon points="240 270 150 440 150 580 240 410" fill={this.props.changeColor} stroke={this.props.strokeColor} strokeWidth='1' ry='1' />
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

export default connect(mapStateToProps)(Wing1)