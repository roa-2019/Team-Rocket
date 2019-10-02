import React, { Component, Fragment } from "react";
import { connect } from "react-redux";



class ResetPopUp extends Component {
    render() {
        return (
            <Fragment>
                <div>

                        <div class="modal-content">
                            <p>Some text in the Modal..</p>

                        <p>Your rocket has successfully launched !</p>
                        <p> <button onClick="ResetButton" className="ResetButton"  onClick={() => {
                        this.props.dispatch(resetApp())
                    }} >Reset </button></p>
                </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default connect()(ResetPopUp);