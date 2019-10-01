import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bodyShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Body } from "../rocket-parts/indexParts";

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
    return (
      <Fragment>
        <div className="container__input">
          <label className="container__radio" htmlFor="r1">
            <input
              type="radio"
              name="body-shape"
              id="r1"
              value="Rectangle"
              onChange={this.onBodyShapeChanged}
            />
            <span
              id="radio__body--1"
              className="checkmark checkmark__shape"
            ><p className="checkmark__shape--text">Rectangular</p>
            </span>
          </label>

          <label className="container__radio" htmlFor="r2">
            <input
              type="radio"
              name="body-shape"
              id="r2"
              value="Trapezoid"
              onChange={this.onBodyShapeChanged}
            />
            <span
              id="radio__body--2"
              className="checkmark checkmark__shape"
            ><p className="checkmark__shape--text">Trapezoid</p>
            </span>
          </label>

          <label className="container__radio" htmlFor="r3">
            <input
              type="radio"
              name="body-shape"
              id="r3"
              value="Hexagon"
              onChange={this.onBodyShapeChanged}
            />
            <span
              id="radio__body--3"
              className="checkmark checkmark__shape"
            ><p className="checkmark__shape--text">Hexagon</p>
            </span>
          </label>

          <label className="container__radio" htmlFor="r4">
            <input
              type="radio"
              name="body-shape"
              id="r4"
              value="Tower"
              onChange={this.onBodyShapeChanged}
            />
            <span
              id="radio__body--4"
              className="checkmark checkmark__shape"
            ><p className="checkmark__shape--text">Tower</p>
            </span>
          </label>
        </div>

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
