import React, { Component, Fragment } from 'react'

class Thruster1 extends Component {


    render() {
        return (
            <Fragment>
                {/*<!-- Thruster 1 horizontal rectangle (clockwise) --> */}
                <polygon points='530 500 330 520 50 520 250 500' fill =  {this.props.changeColor} stroke = {this.props.strokeColor} strokeWidth='1' />
            </Fragment>
    )
  }
}

export default Thruster1