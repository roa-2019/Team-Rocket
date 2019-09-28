import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class Nose3 extends Component {
    render() {
        return (
            <Fragment>
                {/* Nose long triangle 3 */}
                <polygon points="240 200 290 80 340 200" fill={this.props.changeColor} stroke='black' strokeWidth='1' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor
    }
    
}

export default connect(mapStateToProps)(Nose3)