import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { windowShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'

import { Window } from '../rocket-parts/indexParts'

class RocketWindows extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowShape: ''
    }
  }

  onWindowShapeChanged = (e) => {
    this.props.dispatch(windowShape(e.currentTarget.value));
    this.setState({ ...this.state, windowShape: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r17'>
            <input type='radio' name='window-shape' id='r17' value='longWindowSet' onChange={this.onWindowShapeChanged} />
            <span id='radio__window--1' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r18'>
            <input type='radio' name='window-shape' id='r18' value='threeLargeCircularWindows' onChange={this.onWindowShapeChanged} />
            <span id='radio__window--2' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r19'>
            <input type='radio' name='window-shape' id='r19' value='threeMediumRectangularWindows' onChange={this.onWindowShapeChanged} />
            <span id='radio__window--3' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r20'>
            <input type='radio' name='window-shape' id='r20' value='twoLargePanels' onChange={this.onWindowShapeChanged} />
            <span id='radio__window--4' className='checkmark checkmark__shape'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p>Long Window</p>
          <p>Circular</p>
          <p>Rectangular</p>
          <p>Large Window</p>
        </div>

        <div className='container__text--code'>
        <p className="margin__left">
            {" "}
            {ReactDOMServer.renderToString(
              <Window
                windowShape={windowShape}
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
      strokeColor: state.rocket.strokeColor,
      windowShape: state.rocket.windowShape
  }
}

export default connect(mapStateToProps)(RocketWindows)