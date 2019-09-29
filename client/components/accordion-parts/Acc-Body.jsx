import React, { Component, Fragment } from 'react'
import { connect, Provider } from 'react-redux'
import { bodyShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'
import store from '../../index'

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
          <p className='margin__left'>{this.state.bodyShape == 'Rectangle' && ReactDOMServer.renderToString(<Provider store={store}><Body1 /></Provider>)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Trapezoid' && ReactDOMServer.renderToString(<Provider store={store}><Body2 /></Provider>)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Hexagon' && ReactDOMServer.renderToString(<Provider store={store}><Body3 /></Provider>)}</p>
          <p className='margin__left'>{this.state.bodyShape == 'Tower' && ReactDOMServer.renderToString(<Provider store={store}><Body4 /></Provider>)}</p>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RocketBody)