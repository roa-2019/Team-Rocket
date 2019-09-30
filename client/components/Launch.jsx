import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

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

        if (nose == "") {return console.log("add a nose")} 
        else if (body == "") {return console.log("add a body")} 
        else if (wing == "") {return console.log("add a wing")} 
        else if (window == "") {return console.log("add a window")} 
        else if (thruster == "") {return console.log("add a thruster")} 
        else console.log("pass")
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div id='launch-button'>
                    <button onClick={() => this.checkProps()} >Launch</button> 
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
    }
}

export default connect(mapStateToProps)(Launch)