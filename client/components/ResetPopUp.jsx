import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { resetApp } from '../actions/navigate'
import { hideLaunch } from '../actions'


class ResetPopUp extends Component {
	 constructor(props) {
		 super(props)
		 this.state = {
			 popupShowing: false
			}
	 }
	 
componentDidMount() {
	setTimeout(this.displayModal, 2500)
 }

 displayModal = () => {
	this.props.dispatch(hideLaunch())
	this.setState({popupShowing: true});
 }

	render() {
		return (
			<Fragment>
				<div>
						{this.state.popupShowing && <div className="modal-content">
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