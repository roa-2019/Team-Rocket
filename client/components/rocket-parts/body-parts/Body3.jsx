import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Body3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Body 3 pillar */}
                <polygon points="240 200 340 200 380 280 200 280" fill ={this.props.changeColor} stroke = {this.props.strokeColor}  strokeWidth='1' />
                <polygon points="240 500 340 500 380 280 200 280" fill ={this.props.changeColor} stroke = {this.props.strokeColor}  strokeWidth='1' />
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

export default connect(mapStateToProps)(Body3)