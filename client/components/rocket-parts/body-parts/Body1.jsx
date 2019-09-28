import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Body1 extends Component {
   
    render() {
        return (
            <Fragment>
                {/*<!-- Body 1 rectangle (clockwise beginning at top left) --> */}
                <polygon points="240 200 340 200 340 500 240 500" fill={this.props.changeColor} stroke='black' strokeWidth='1' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        changeColor: state.rocket.changeColor
    }
    
}


export default connect(mapStateToProps)(Body1)

