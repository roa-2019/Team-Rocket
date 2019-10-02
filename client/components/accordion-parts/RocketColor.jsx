import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../../actions/index'


class RocketColor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      changeColor: '',
    }
  }

  onColorChanged = (e) => {
    this.props.dispatch(changeColor(e.currentTarget.value));
    this.setState({changeColor: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='container__input'>

          <label className='container__radio' htmlFor='r21'>
            <input className='custom purple' type='radio' name='change-colour' id='r21' value='#244646' onChange={this.onColorChanged} />
            <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r22'>
            <input type='radio' name='change-colour' id='r22' value='#1f425e' onChange={this.onColorChanged} />
            <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
          </label>


          <label className='container__radio' htmlFor='r23'>
            <input type='radio' name='change-colour' id='r23' value='#ae2720' onChange={this.onColorChanged} />
            <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>
          </label>

          <label className='container__radio' htmlFor='r24'>
            <input type='radio' name='change-colour' id='r24' value='#d9b964' onChange={this.onColorChanged} />
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
          <p className='margin__left'> .rocketColor &#123; <br/> color: {this.state.changeColor} <br/> &#125;</p>
        </div>
      </Fragment>
    )
  }
}

export default connect()(RocketColor)

