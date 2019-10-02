import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {robotMessage} from '../actions'

class Messages extends Component {
    componentWillUpdate() {
        this.addParts()
    }

    addParts() {
        const {noseShape, bodyShape, wingShape, windowShape, thrusterShape, dispatch, changeColor, strokeColor} = this.props

    
        const steps = messages.rocketBuilding
        const badParts = messages.brokenParts
    
        if (bodyShape == "Rectangle") { return dispatch(robotMessage(badParts.rectangle)) }
        else if (bodyShape != "" ) { return dispatch(robotMessage(steps.noseMessage)) }
        else if (noseShape != "") { return dispatch(robotMessage(steps.wingMessage)) }
        else if (noseShape == "Pyramid") { return dispatch(robotMessage(badParts.pyramid)) }
        else if (wingShape != "") { return dispatch(robotMessage(steps.thrusterMessage)) }
        else if (wingShape == "SmallTriangle") { return dispatch(robotMessage(badParts.smallTriangle)) }
        else if (thrusterShape != "") { return dispatch(robotMessage(steps.windowsMessage)) }
        else if (thrusterShape == "Thruster1") { return dispatch(robotMessage(badParts.thruster1)) }
        else if (windowShape != "") { return dispatch(robotMessage(steps.colorMessage)) }
        else if (changeColor != "") { return dispatch(robotMessage(steps.borderColorMessage)) }
        else if (strokeColor != "") { return dispatch(robotMessage(steps.lastMessage)) }
    }
    render() {

        return (
            <Fragment>
                <p className='robot-messages'>{this.props.robot}</p>
            </Fragment>
        )
    }
}




var messages = {
    brokenParts: {
        rectangle: "Do you see me? How am I supposed to fit into such a thin Rocket?!",
        pyramid: "Oops you'll have to choose a nose that isn't wonky",
        smallTriangle: "The Rocket will not take off with wings that small",
        thruster1: "Oh no, that's way too small - your're going to have to choose another one",
        twoLargePanels: "There's no glass in these windows, I'll get sucked into Space!",
        chuckNorris: "I see you've chosen the Chuck Norris colour, this is special because html converts colour names to hexadecimal, here's a diagram to help you understand\n 'Chuck Norris' -> “chucknorris” -> C00C 0000 0000 -> C0 00 00 -> #C00000 -> red!"
    },
    missingParts: {
        nose: "This rocket won't take off without a  nose, add one now!",
        body: "This rocket won't take off without a  body, add one now!",
        wing: "This rocket won't take off without a  wing, add one now!",
        window: "This rocket won't take off without a  window, add one now!",
        thruster: "This rocket won't take off without a  thruster, add one now!"
    },
    rocketBuilding: {
        firstMessage: "Hello there!, my name is JV Bot 2000, just like the real one I was built with code. My ship crashed here but my programming tells me you're here to help. Lets begin with adding some parts, start by adding a body",
        noseMessage: "Well done, now add a nose to give this rocket some aerodynamics.",
        wingMessage: "Great job! You're a natural, lets add wings to make this ship fly.",
        thrusterMessage: "Now add a thruster to get us off the ground.",
        windowsMessage: "With a ride back to earth this long some windows would help.",
        colorMessage: "Our rocket is too boring, choose a colour to snazz it up a bit",
        borderColorMessage: "Just to make it look even nicer lets add a border colour",
        lastMessage: "Our rocket looks ready to fly, click the launch button to take off"
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

export default connect(mapStateToProps)(Messages);

