import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { windowShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Window } from "../rocket-parts/indexParts";
import AccButtons from './AccButtons'

class RocketWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowShape: ""
    };
  }

  onWindowShapeChanged = e => {
    this.props.dispatch(windowShape(e.currentTarget.value));
    this.setState({ ...this.state, windowShape: e.currentTarget.value });
  };

  render() {
    let { windowShape, changeColor, strokeColor } = this.props;
    let values = ["Long", "Circular", "Rectangular", "Large"];
    let type = "window";

    return (
      <Fragment>
        <AccButtons
          values={values}
          offset={17}
          onChange={this.onWindowShapeChanged}
          type={type}
        />

        <div className="container__text--code">
          <p className="margin__left">
            {ReactDOMServer.renderToString(
              <Window
                windowShape={windowShape}
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
    windowShape: state.rocket.windowShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketWindows);