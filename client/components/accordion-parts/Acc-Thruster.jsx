import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { thrusterShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'

import { Thruster } from '../rocket-parts/indexParts'

class RocketThruster extends Component {

  constructor(props) {
    super(props)
    this.state = {
      thrusterShape: ''
    }
  }

  onThrusterShapeChanged = (e) => {
    this.props.dispatch(thrusterShape(e.currentTarget.value));
    this.setState({ ...this.state, thrusterShape: e.currentTarget.value })
  }

  render() {
    let { changeColor, strokeColor } = this.props
    return (
      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r13'>
            <input type='radio' name='thruster-shape' id='r13' value='Thruster1' onChange={this.onThrusterShapeChanged} />
            <span id='radio__thruster--1' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r14'>
            <input type='radio' name='thruster-shape' id='r14' value='Thruster2' onChange={this.onThrusterShapeChanged} />
            <span id='radio__thruster--2' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r15'>
            <input type='radio' name='thruster-shape' id='r15' value='Thruster3' onChange={this.onThrusterShapeChanged} />
            <span id='radio__thruster--3' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r16'>
            <input type='radio' name='thruster-shape' id='r16' value='Thruster4' onChange={this.onThrusterShapeChanged} />
            <span id='radio__thruster--4' className='checkmark checkmark__shape'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p>Rectanglular</p>
          <p>Triangular</p>
          <p>Trapeziod</p>
          <p>Fin</p>
        </div>

        <div className='container__text--code'>
        <p className="margin__left">
            {" "}
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
    )
  }
}

function mapStateToProps(state){
  return{
      changeColor: state.rocket.changeColor,
      strokeColor: state.rocket.strokeColor,
      thrusterShape: state.rocket.thrusterShape
  }
}

export default connect(mapStateToProps)(RocketThruster)