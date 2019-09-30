import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server'

import { Nose1, Nose2, Nose3, Nose4 } from '../rocket-parts/indexParts'

class RocketNose extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noseShape: ''
    }
  }

  onNoseShapeChanged = (e) => {
    this.props.dispatch(noseShape(e.currentTarget.value));
    this.setState({ ...this.state, noseShape: e.currentTarget.value })

  }

  render() {
    let { changeColor, strokeColor } = this.props
    return (
      <Fragment>
        <div className='container__input '>

          <label className='container__radio' htmlFor='r5'>
            <input type='radio' name='nose-shape' id='r5' value='Ellipse' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--square' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r6'>
            <input type='radio' name='nose-shape' id='r6' value='Pyramid' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--triangle' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r7'>
            <input type='radio' name='nose-shape' id='r7' value='Triangular' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r8'>
            <input type='radio' name='nose-shape' id='r8' value='Top Window' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--circle' className='checkmark checkmark__shape'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p>Ellipse</p>
          <p>Pyramid</p>
          <p>Triangular</p>
          <p>Top Window</p>
        </div>

        <div className='container__text--code'>
          <p className='margin__left'>{this.state.noseShape == 'Ellipse' && ReactDOMServer.renderToString(<Nose1 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Pyramid' && ReactDOMServer.renderToString(<Nose2 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Triangular' && ReactDOMServer.renderToString(<Nose3 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Top Window' && ReactDOMServer.renderToString(<Nose4 changeColor={changeColor} strokeColor={strokeColor} />)}</p>
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

export default connect(mapStateToProps)(RocketNose)