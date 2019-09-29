import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { wingShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux'
import store from '../../index'

import { Wing1, Wing3, Wing4, Wing5 } from '../rocket-parts/indexParts'

class RocketWings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wingShape: ''
    }
  }

  onWingShapeChanged = (e) => {
    this.props.dispatch(wingShape(e.currentTarget.value));
    this.setState({ ...this.state, wingShape: e.currentTarget.value })

  }

  render() {
    return (
      <Fragment>
        <div className='container__input'>
          <label className='container__radio' htmlFor='r9'>
            <input type='radio' name='wing-shape' id='r9' value='Paralelogram' onChange={this.onWingShapeChanged} />
            <span id='radio__wings--1' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r10'>
            <input type='radio' name='wing-shape' id='r10' value='SmallParalelogram' onChange={this.onWingShapeChanged} />
            <span id='radio__wings--3' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r11'>
            <input type='radio' name='wing-shape' id='r11' value='SmallTriangle' onChange={this.onWingShapeChanged} />
            <span id='radio__wings--4' className='checkmark checkmark__shape'></span>
          </label>


          <label className='container__radio' htmlFor='r12'>
            <input type='radio' name='wing-shape' id='r12' value='Large' onChange={this.onWingShapeChanged} />
            <span id='radio__wings--5' className='checkmark checkmark__shape'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p>Paralelogram(large)</p>
          <p>Paralelogram(small)</p>
          <p>Triangular(small)</p>
          <p>Polygon(large)</p>
        </div>

        <div className='container__text--code'>
          <p className='margin__left'>{this.state.wingShape == 'Paralelogram' && ReactDOMServer.renderToString(<Provider store={store}><Wing1 /></Provider>)}</p>
          <p className='margin__left'>{this.state.wingShape == 'SmallParalelogram' && ReactDOMServer.renderToString(<Provider store={store}><Wing3 /></Provider>)}</p>
          <p className='margin__left'>{this.state.wingShape == 'SmallTriangle' && ReactDOMServer.renderToString(<Provider store={store}><Wing4 /></Provider>)}</p>
          <p className='margin__left'>{this.state.wingShape == 'Large' && ReactDOMServer.renderToString(<Provider store={store}><Wing5 /></Provider>)}</p>
        </div>
      </Fragment>

    )
  }
}

function mapStateToProps(state) {
  return {
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  }
}

export default connect(mapStateToProps)(RocketWings)