import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class Window1 extends Component {
    render() {
        return (
            <Fragment>
                {/*<!-- Window set 1 long, squares and circles (top to bottom) (clockwise) --> */}
                <circle cx='290' cy='260' r='10' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' fill='grey' />
                <circle cx='290' cy='440' r='10' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' fill='grey' />
                <polygon points='300 260 300 280 280 280 280 260' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 280 300 300 280 300 280 280' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 300 300 320 280 320 280 300' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 320 300 340 280 340 280 320' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 340 300 360 280 360 280 340' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 360 300 380 280 380 280 360' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 380 300 400 280 400 280 380' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 400 300 420 280 420 280 400' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
                <polygon points='300 420 300 440 280 440 280 420' fill='aqua' stroke= {this.props.strokeColor} strokeWidth='1' />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
       strokeColor: state.rockect.strokeColor
    }
    
}


export default connect(mapStateToProps)(Window1)