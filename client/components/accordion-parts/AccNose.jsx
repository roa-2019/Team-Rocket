import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { noseShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Nose } from "../rocket-parts/indexParts";
import AccButtons from './AccButtons'

class RocketNose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noseShape: ""
    };
  }

  onNoseShapeChanged = e => {
    this.props.dispatch(noseShape(e.currentTarget.value));
    this.setState({ ...this.state, noseShape: e.currentTarget.value });
  };

  render() {
    let { noseShape, changeColor, strokeColor } = this.props;
    let values = ["Ellipse", "Pyramid", "Triangular", "Top Window"];
    let type = "nose";

    return (
      <Fragment>
        <AccButtons
          values={values}
          offset={5}
          onChange={this.onNoseShapeChanged}
          type={type}
        />

        <div className="container__text--code">
          <p className="margin__left">
            {ReactDOMServer.renderToString(
              <Nose
                noseShape={noseShape}
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
    noseShape: state.rocket.noseShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketNose);