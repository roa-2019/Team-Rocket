import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Nose1 extends Component {
    render() {

           return (
            <Fragment>
                {/*<!-- Nose circle 1 --> */}
                <ellipse cx="290" cy="210" rx="50" ry='100' stroke={this.props.strokeColor} strokeWidth="1" fill={this.props.changeColor} />
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

export default connect(mapStateToProps)(Nose1)