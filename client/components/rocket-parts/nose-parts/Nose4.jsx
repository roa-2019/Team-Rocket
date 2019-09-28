import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class Nose4 extends Component {
    render() {
        return (
            <Fragment>
                {/* long Nose triangle with square window 4 */}
                <polygon points="240 200 290 80 340 200" fill={this.props.changeColor} stroke='black' strokeWidth='1' />
                <polygon points='280 150 300 150 300 190 280 190' stroke='black' strokeWidth='1' fill='aqua' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor
    }
    
}

export default connect(mapStateToProps)(Nose4)