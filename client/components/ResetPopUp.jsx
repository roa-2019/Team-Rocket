import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { resetApp } from '../actions/navigate'



class ResetPopUp extends Component {
	 display = false;
componentDidMount() {
	setTimeout(this.displayModal(), 3000)
 }

 displayModal = () => {
	this.display = true;
 }
	render() {

		return (
			<Fragment>
				<div>
						{this.display && <div class="modal-content">
						<p>Some text in the Modal..</p>

						<p>Your rocket has successfully launched !</p>
						<p> <button onClick="ResetButton" className="ResetButton" onClick={() => {
							this.props.dispatch(resetApp())
						}} >Reset </button></p>
					</div>}

				</div>
			</Fragment>
		)
	}
}

export default connect()(ResetPopUp);