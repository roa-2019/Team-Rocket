import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { wingShape } from "../../actions/index";
import ReactDOMServer from "react-dom/server";

import { Wing } from "../rocket-parts/indexParts";
import AccButtons from './AccButtons'

class RocketWings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wingShape: ""
    };
  }

  onWingShapeChanged = e => {
    this.props.dispatch(wingShape(e.currentTarget.value));
    this.setState({ ...this.state, wingShape: e.currentTarget.value });
  };

  render() {
    let { wingShape, changeColor, strokeColor } = this.props;
    let values = ["Paralelogram", "SmallParalelogram", "SmallTriangle", "Large"];
    let type = "wing";

    return (
      <Fragment>
        <AccButtons
          values={values}
          offset={9}
          onChange={this.onWingShapeChanged}
          type={type}
        />

        <div className="container__text--code">
          <p className="margin__left">
            {ReactDOMServer.renderToString(
              <Wing
                wingShape={wingShape}
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
    wingShape: state.rocket.wingShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketWings);