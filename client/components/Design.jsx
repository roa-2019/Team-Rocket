import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, changeColor, bodyShape, wingShape } from '../actions/index'

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noseShape: '',
      changeColor: '',
      bodyShape: '',
      wingShape: ''
    }
  }


  componentDidMount() {
    let items = document.querySelectorAll(".accordion a");
    items.forEach((item) => item.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
  }

  onNoseShapeChanged = (e) => {
    this.props.dispatch(noseShape(e.currentTarget.value));
    this.setState({ ...this.state, noseShape: e.currentTarget.value })
  }

  onColorChanged = (e) => {
    this.props.dispatch(changeColor(e.currentTarget.value));
    this.setState({ ...this.state, changeColor: e.currentTarget.value })
  }

  onBodyShapeChanged = (e) => {
    this.props.dispatch(bodyShape(e.currentTarget.value));
    this.setState({ ...this.state, bodyShape: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='design col b'>

          <div className="details-panel">
            <h3>Build Your Rocket</h3>

            <div className="accordion">

              {/* <!-- Colour --> */}
              <div className="accordion-item">
                <a>Colours</a>
                <div className="info">

                  <div className="container__column">
                    <div className='container__input b'>

                      <label className='container__radio' htmlFor="r1">
                        <input className='custom purple' type="radio" name="change-colour" id="r1" value="Green" onChange={this.onColorChanged} />
                        <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
                      </label>

                      <label className='container__radio' htmlFor="r2">
                        <input type="radio" name="change-colour" id="r2" value="Blue" onChange={this.onColorChanged} />
                        <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
                      </label>


                      <label className='container__radio' htmlFor="r3">
                        <input type="radio" name="change-colour" id="r3" value="#FF0000" onChange={this.onColorChanged} />
                        <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>
                      </label>

                      <label className='container__radio' htmlFor="r4">
                        <input type="radio" name="change-colour" id="r4" value="Yellow" onChange={this.onColorChanged} />
                        <span id='radio__colour--yellow' className='checkmark checkmark__colours'></span>
                      </label>
                    </div>
                    <div className="container__input--text">
                      <p>Type Of Colour</p>
                      <p>Type Of Colour</p>
                      <p>Type Of Colour</p>
                      <p>Type Of Colour</p>
                    </div>
                  </div>

                  <div className="container__text--code">
                    <p>Colour: {this.state.changeColor}</p>
                  </div>
                </div>
              </div>

              {/* <!-- Nose Shape --> */}
              <div className="accordion-item">
                <a>Nose</a>
                <div className="info">

                  <div className="container__column">
                    <div className='container__input b'>

                      <label className='container__radio' htmlFor="r5">
                        <input type="radio" name="nose-shape" id="r5" value="Triangle" onChange={this.onNoseShapeChanged} />
                        <span id='radio__nose--square' className='checkmark checkmark__shape'></span>
                      </label>

                      <label className='container__radio' htmlFor="r6">
                        <input type="radio" name="nose-shape" id="r6" value="Square" onChange={this.onNoseShapeChanged} />
                        <span id='radio__nose--triangle' className='checkmark checkmark__shape'></span>
                      </label>

                      <label className='container__radio' htmlFor="r7">
                        <input type="radio" name="nose-shape" id="r7" value="Circle" onChange={this.onNoseShapeChanged} />
                        <span id='radio__nose--circle' className='checkmark checkmark__shape'></span>
                      </label>

                    </div>
                    <div className="container__input--text">
                      <p>Type Of Shape</p>
                      <p>Type Of Shape</p>
                      <p>Type Of Shape</p>
                    </div>
                  </div>

                  <div className="container__text--code">
                    <p>Nose Shape: {this.state.noseShape}</p>
                  </div>
                </div>
              </div>

              {/* <!-- Body Shape--> */}
              <div className="accordion-item">
                <a>Body</a>
                <div className="info">
                  <div className="container__column">

                    <div className='container__input'>

                      <label className='container__radio' htmlFor="r8">
                        <input type="radio" name="body-shape" id="r8" value="shape" onChange={this.onBodyShapeChanged} />
                        <span id='radio__body--' className='checkmark checkmark__shape'></span>
                      </label>

                      <label className='container__radio' htmlFor="r9">
                        <input type="radio" name="body-shape" id="r9" value="shape" onChange={this.onBodyShapeChanged} />
                        <span id='radio__body--' className='checkmark checkmark__shape'></span>
                      </label>

                      <label className='container__radio' htmlFor="r10">
                        <input type="radio" name="body-shape" id="r10" value="shape" onChange={this.onBodyShapeChanged} />
                        <span id='radio__body--' className='checkmark checkmark__shape'></span>
                      </label>
                    </div>

                    <div className="container__input--text">
                      <p>Type Of Shape</p>
                      <p>Type Of Shape</p>
                      <p>Type Of Shape</p>
                    </div>

                  </div>
                  <div className="container__text--code">
                    <p>Body Shape: {this.state.bodyShape}</p>
                  </div>
                </div>
              </div>

              {/* <!-- wings --> */}
              <div className="accordion-item">
                <a>Wings</a>
                <div className="info">

                  <div className='container__input'>
                    <input type="radio" name="wing-shape" id="r11" value="" onChange={this.onWingShapeChanged} />
                    <label htmlFor="r11">Wing 1</label>

                    <input type="radio" name="wing-shape" id="r12" value="" onChange={this.onWingShapeChanged} />
                    <label htmlFor="r12">Wing 2</label>

                    <input type="radio" name="wing-shape" id="r13" value="" onChange={this.onWingShapeChanged} />
                    <label htmlFor="r13">Wing 3</label>
                  </div>
                </div>
              </div>

              {/* <!-- Menu 5 --> */}
              <div className="accordion-item">
                <a>Exhaust</a>
                <div className="info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Fragment>
    )
  }
}


export default connect()(Design)