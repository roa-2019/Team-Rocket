import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isRocketComplete } from '../actions/index'

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

        if (nose == "") { return alert("add a nose") }
        else if (body == "") { return alert("add a body") }
        else if (wing == "") { return alert("add a wing") }
        else if (window == "") { return alert("add a window") }
        else if (thruster == "") { return alert("add a thruster") }
        else if (body == "Rectangle") {return alert("You cannot use this part silly") }
        else if (wing == "SmallTriangle") {return alert("You cannot use this part silly") }
        else if (thruster == "Thruster1") {return alert("You cannot use this part silly") }
        else if (window == "twoLargePanels") {return alert("You cannot use this part silly")}
        else this.props.dispatch(isRocketComplete(true));
    }
    render() {
        return (
            <Fragment>
                <div id='launch-button'>
                    <button onClick={() => this.checkProps()} >Launch</button>
                    {/* {this.state.launchRocket && <Animations />} */}
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
        strokeColor: state.rocket.strokeColor,
        changeColor: state.rocket.changeColor,
        isRocketComplete: state.rocket.isRocketComplete,
    }
}

export default connect(mapStateToProps)(Launch)