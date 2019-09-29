import React, { Component, Fragment } from "react";
import { GoToBuildRocket } from "../actions/navigate.js";
import { connect } from "react-redux";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="Landingimg">
            <img
              src="/images/Landingimg.jpg"
              onClick={() => {
                this.props.dispatch(GoToBuildRocket());
              }}
            ></img>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(LandingPage);
