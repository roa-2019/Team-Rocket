import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Window2 extends Component {
    render() {
        return (
            <Fragment>
                {/* Window set 2 three large circle windows with decent border */}
                <circle cx='290' cy='300' r='20' fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' fill='aqua' strokeOpacity='.4' />
                <circle cx='290' cy='370' r='20' fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' strokeOpacity='.4' />
                <circle cx='290' cy='440' r='20' fill='aqua' stroke={this.props.strokeColor} strokeWidth='4' strokeOpacity='.4' />
            </Fragment>

        )
    }
}


function mapStateToProps(state){
    return{
       strokeColor: state.rockect.strokeColor
    }
    
}

export default connect(mapStateToProps)(Window2)