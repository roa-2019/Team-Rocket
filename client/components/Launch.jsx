import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isRocketComplete, robotMessage } from '../actions/index'

class Launch extends Component {
    constructor(props) {
        super(props);
        this.checkProps = this.checkProps.bind(this)
    }
    checkProps() {
        const nose = this.props.noseShape
        const body = this.props.bodyShape
        const wing = this.props.wingShape
        const window = this.props.windowShape
        const thruster = this.props.thrusterShape
        const dispatch = this.props.dispatch

        if (body == "") { return dispatch(robotMessage("The rocket won't take off without a body, add one now!")) }
        else if (nose == "") { return dispatch(robotMessage("The rocket won't take off without a nose, add one now!")) }
        else if (nose == "Pyramid") {return dispatch(robotMessage())}
        else if (wing == "") { return dispatch(robotMessage("The rocket won't take off without a wing, add one now!"))}
        else if (wing == "SmallTriangle") {return dispatch(robotMessage())}
        else if (thruster == "") { return dispatch(robotMessage("The rocket won't take off without a  thruster, add one now!")) }
        else if (thruster == "Thruster1") {return dispatch(robotMessage())}
        else if (window == "") {return dispatch(robotMessage("Add a window"))}
        else this.props.dispatch(isRocketComplete(true));
    }
    render() {
        return (
            <Fragment>
                <div id='launch-button'>
                    <button className='StartButton' onClick={() => this.checkProps()} >Launch</button>
                    {this.props.launchRocket}
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        noseShape: state.rocket.noseShape,
        bodyShape: state.rocket.bodyShape,
        wingShape: state.rocket.wingShape,
        windowShape: state.rocket.windowShape,
        thrusterShape: state.rocket.thrusterShape,
        isRocketComplete: state.rocket.isRocketComplete,
        changeColor: state.rocket.changeColor,
        strokeColor: state.rocket.strokeColor,
        robot: state.rocket.robotMessage
    }
}

export default connect(mapStateToProps)(Launch)