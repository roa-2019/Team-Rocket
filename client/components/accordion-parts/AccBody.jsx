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
    let values = ["Rectangle", "Trapezoid", "Hexagon", "Tower"];

    return (
      <Fragment>
          <AccButtons values={values} offset={1} onChange={this.onBodyShapeChanged}/>

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

function AccButtons({values, offset, onChange}) {
  let labels = values.map((value, key) => {
    let id = key + offset;
    return (
      
      <label className="container__radio" htmlFor={"r" + id} key={key}>
        <input
          type="radio"
          name="body-shape"
          id={"r" + id}
          value={value}
          onChange={onChange}
        />
        <span
          id={"radio__body--" + id}
          className="checkmark checkmark__shape"
        >
          <p className="checkmark__shape--text">{value}</p>
        </span>
      </label>
    );
  });
return <div className="container__input">{labels}</div>
}

function mapStateToProps(state) {
  return {
    bodyShape: state.rocket.bodyShape,
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  };
}

export default connect(mapStateToProps)(RocketBody);
