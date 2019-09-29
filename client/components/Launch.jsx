import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { functionTypeParam } from '@babel/types';

class Launch extends Component {
    constructor(props) {
        super(props);
        this.launchMethod = this.launchMethod.bind(this)

    }

    launchMethod() {
        console.log(this.props)
    }



render() {
    return (
        <Fragment>
            <div id='launch-button'>
                <button onClick={() => this.launchMethod()} >Launch</button>
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