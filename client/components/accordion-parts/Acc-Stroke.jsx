import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { strokeColor } from '../../actions/index'

class RocketStrokeColor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      changeStroke: '',
    }
  }

  onStrokeColorChanged = (e) => {
    this.props.dispatch(strokeColor(e.currentTarget.value));
    this.setState({ ...this.state, strokeColor: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r25'>
            <input className='custom purple' type='radio' name='change-colour' id='r25' value='Green' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r26'>
            <input type='radio' name='change-colour' id='r26' value='Blue' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
          </label>


          <label className='container__radio' htmlFor='r27'>
            <input type='radio' name='change-colour' id='r27' value='#FF0000' onChange={this.onStrokeColorChanged} />
            <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r28'>
            <input type='radio' name='change-colour' id='r28' value='Yellow' onChange={this.onStrokeColorChanged} />
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
          <p className='margin__left'> {this.state.strokeColor}</p>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    strokeColor: state.rocket.strokeColor,
  }
}

export default connect(mapStateToProps)(RocketStrokeColor)