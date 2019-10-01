import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { thrusterShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Thruster } from "../rocket-parts/indexParts";
import AccButtons from './AccButtons'

class RocketThruster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thrusterShape: ""
    };
  }

  onThrusterShapeChanged = e => {
    this.props.dispatch(thrusterShape(e.currentTarget.value));
    this.setState({ ...this.state, thrusterShape: e.currentTarget.value });
  };

  render() {
    let { thrusterShape, changeColor, strokeColor } = this.props;
    let values = ["Thruster1", "Thruster2", "Thruster3", "Thruster4"];
    let type = "thruster";

    return (
      <Fragment>
        <AccButtons
          values={values}
          offset={9}
          onChange={this.onThrusterShapeChanged}
          type={type}
        />

        <div className="container__text--code">
          <p className="margin__left">
            {ReactDOMServer.renderToString(
              <Thruster
                thrusterShape={thrusterShape}
                changeColor={changeColor}
                strokeColor={strokeColor}
              />
            )}
          </p>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    thrusterShape: state.rocket.thrusterShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketThruster);