import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { thrusterShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'

import { Thruster1, Thruster2, Thruster3, Thruster4 } from '../rocket-parts/indexParts'

class RocketThruster extends Component {

  constructor(props) {
    super(props)
    this.state = {
      thrusterShape: ''
    }
  }

  onThrusterShapeChanged = (e) => {
    dispatch(thrusterShape(e.currentTarget.value));
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
          <p className='margin__left'>{this.state.thrusterShape == 'Thruster1' && ReactDOMServer.renderToString(<Thruster1 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.thrusterShape == 'Thruster2' && ReactDOMServer.renderToString(<Thruster2 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.thrusterShape == 'Thruster3' && ReactDOMServer.renderToString(<Thruster3 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.thrusterShape == 'Thruster4' && ReactDOMServer.renderToString(<Thruster4 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
      changeColor: state.rocket.changeColor,
      strokeColor: state.rocket.strokeColor
  }
}

export default connect(mapStateToProps)(RocketThruster)