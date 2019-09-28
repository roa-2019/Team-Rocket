import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Nose5 extends Component {
    render() {
        return (
            <Fragment>
                {/* Long nose triangle with circle window and dot in the middle 5 */}
                <polygon points="240 200 290 80 340 200" fill={this.props.changeColor} stroke='black' strokeWidth='1' />
                <circle cx='290' cy='170' r='20' fill='aqua' stroke='black' strokeWidth='1' />
                <circle cx='290' cy='170' r='4' fill='black' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor
    }
    
}


export default connect(mapStateToProps)(Nose5)