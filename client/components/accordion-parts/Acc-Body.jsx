import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bodyShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'

import { Body1, Body2, Body3, Body4 } from '../rocket-parts/indexParts'

class RocketBody extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bodyShape: ''
    }
  }

  onBodyShapeChanged = (e) => {
    this.props.dispatch(bodyShape(e.currentTarget.value));
    this.setState({ ...this.state, bodyShape: e.currentTarget.value })
  }

  render() {
    return (

      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r1'>
            <input type='radio' name='body-shape' id='r1' value='Rectangle' onChange={this.onBodyShapeChanged} />
            <span id='radio__body--1' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r2'>
            <input type='radio' name='body-shape' id='r2' value='Trapezoid' onChange={this.onBodyShapeChanged} />
            <span id='radio__body--2' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r3'>
            <input type='radio' name='body-shape' id='r3' value='Hexagon' onChange={this.onBodyShapeChanged} />
            <span id='radio__body--3' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r4'>
            <input type='radio' name='body-shape' id='r4' value='Tower' onChange={this.onBodyShapeChanged} />
            <span id='radio__body--4' className='checkmark checkmark__shape'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p>Rectangular</p>
          <p>Trapezoid</p>
          <p>Hexagon</p>
          <p>Tower</p>
        </div>

        <div className='container__text--code'>
          <p className='margin__left'>{this.state.bodyShape == 'Rectangle' && ReactDOMServer.renderToString(<Body1 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Trapezoid' && ReactDOMServer.renderToString(<Body2 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Hexagon' && ReactDOMServer.renderToString(<Body3 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Tower' && ReactDOMServer.renderToString(<Body4 changeColor={this.props.changeColor} strokeColor={this.props.strokeColor} />)}</p>
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

export default connect(mapStateToProps)(RocketBody)