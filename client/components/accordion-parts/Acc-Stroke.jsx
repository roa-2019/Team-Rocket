import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { strokeColor } from '../../actions/index'

class RocketStrokeColor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      strokeColor: '',
    }
  }

  onStrokeColorChanged = (e) => {
    this.props.dispatch(strokeColor(e.currentTarget.value));
    this.setState({strokeColor: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r25'>
            <input className='custom purple' type='radio' name='change-colour' id='r25' value='#90ee90' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r26'>
            <input type='radio' name='change-colour' id='r26' value='#87cefa' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
          </label>


          <label className='container__radio' htmlFor='r27'>
            <input type='radio' name='change-colour' id='r27' value='#C00000' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r28'>
            <input type='radio' name='change-colour' id='r28' value='#ffff00' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--yellow' className='checkmark checkmark__colours'></span>
          </label>
        </div>

        <div className='container__input--text'>
          <p className=''>Green</p>
          <p className=''>Blue</p>
          <p className=''>Chuck Norris</p>
          <p className=''>Yellow</p>
        </div>

        <div className='container__text--code'>
          <p className='margin__left'> .rocketColor &#123; <br/> color: {this.state.strokeColor} <br/> &#125;</p>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RocketStrokeColor)