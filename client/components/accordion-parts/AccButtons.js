import React from "react";

import addParts from '../Messages'

export default function AccButtons({ values, offset, onChange, type }) {

  let labels = values.map((value, key) => {
    let id = key + offset;
    return (
      <label className="container__radio" htmlFor={"r" + id} key={key}>
        <input
          type="radio"
          name={type + "-shape"}
          id={"r" + id}
          value={value}
          onChange={onChange}
          // onClick={() => this.addParts() }
        />
        <span
          id={"radio__" + { type } + "--" + id}
          className="checkmark checkmark__shape"
        >
          <p className="checkmark__shape--text">{value}</p>
        </span>
      </label>
    );
  });
  return <div className="container__input">{labels}</div>;
}