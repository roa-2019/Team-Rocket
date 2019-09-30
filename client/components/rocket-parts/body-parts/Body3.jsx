import React, { Component, Fragment } from 'react'

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

export default Body3