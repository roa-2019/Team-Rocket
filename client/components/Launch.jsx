import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isRocketComplete, robotMessage, hideLaunch } from '../actions/index'

class Launch extends Component {

    checkProps = () => {
        const nose = this.props.noseShape
        const body = this.props.bodyShape
        const wing = this.props.wingShape
        const window = this.props.windowShape
        const thruster = this.props.thrusterShape
        const dispatch = this.props.dispatch

        if (body == "") { return dispatch(robotMessage("The rocket won't take off without a body, add one now!")) }
        else if (body == "Rectangle") { return dispatch(robotMessage("Do you see me? How am I supposed to fit into such a thin Rocket?!"))}
        else if (nose == "") { return dispatch(robotMessage("The rocket won't take off without a nose, add one now!")) }
        else if (nose == "Pyramid") {return dispatch(robotMessage("Oops you'll have to choose a nose that isn't wonky"))}
        else if (wing == "") { return dispatch(robotMessage("The rocket won't take off without a wing, add one now!"))}
        else if (wing == "SmallTriangle") {return dispatch(robotMessage("The Rocket will not take off with wings that small"))}
        else if (thruster == "") { return dispatch(robotMessage("The rocket won't take off without a  thruster, add one now!")) }
        else if (thruster == "Thruster1") {return dispatch(robotMessage("Oh no, that's way too small - your're going to have to choose another one")) }
        else if (window == "") {return dispatch(robotMessage("Add a window")) }
        else this.props.dispatch(isRocketComplete(true));
    }
    render() {
        return (
            <Fragment>
                {this.props.hideLaunch && <div id='launch-button'>
                    <button className='StartButton' onClick={() => this.checkProps()} >Launch</button>
                    {this.props.launchRocket}
                </div>}
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
        robot: state.rocket.robotMessage,
        hideLaunch: state.hideLaunch
    }
}

export default connect(mapStateToProps)(Launch)