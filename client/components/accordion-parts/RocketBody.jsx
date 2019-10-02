import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bodyShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Body } from "../rocket-parts/indexParts";
import AccButtons from './AccButtons'

class RocketBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyShape: ""
    };
  }

  onBodyShapeChanged = e => {
    this.props.dispatch(bodyShape(e.currentTarget.value));
    this.setState({ ...this.state, bodyShape: e.currentTarget.value });
  };

  render() {
    let { bodyShape, changeColor, strokeColor } = this.props;
    let values = ["Rectangle", "Trapezoid", "Hexagon", "Tower"];
    let type = "body";

    return (
      <Fragment>
        <AccButtons
          values={values}
          offset={1}
          onChange={this.onBodyShapeChanged}
          type={type}
        />

        <div className="container__text--code">
          <p className="margin__left">
            {ReactDOMServer.renderToString(
              <Body
                bodyShape={bodyShape}
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
    bodyShape: state.rocket.bodyShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketBody);
