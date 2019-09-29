import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Window4 extends Component {
    render() {
        return (
            <Fragment>
                {/* Window set 4 two large y axis rectangle panels no fill color only border */}
                <polygon points="270 410 310 410 310 340 270 340" fill='grey' stroke={this.props.strokeColor} strokeWidth='1' fillOpacity='.0' />
                <polygon points="270 420 310 420 310 490 270 490" fill='grey' stroke={this.props.strokeColor} strokeWidth='1' fillOpacity='.0' />
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
       strokeColor: state.rocket.strokeColor
    }
}

export default connect(mapStateToProps)(Window4)