import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, noseColor, bodyShape, finShape } from '../actions/index'

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noseShape: '',
      noseColor: '',
      bodyShape: '',
      finShape: ''
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

  onNoseColorChanged = (e) => {
    this.props.dispatch(noseColor(e.currentTarget.value));
    this.setState({ ...this.state, noseColor: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='design col b'>

          <div className="details-panel">
            <h3>Build Your Rocket</h3>

            <div className="accordion">

              {/* <!-- Menu 1 --> */}
              <div className="accordion-item">
                <a>Colours</a>
                <div className="info">

                  <div className='container__input b'>

                    <label className='container__radio' htmlFor="r1">
                      <input className='custom purple' type="radio" name="nose-colour" id="r1" value="Green" onChange={this.onNoseColorChanged} />
                      <span id='radio__colour--green' className='checkmark checkmark__colours'></span>
                    </label>

                    <label className='container__radio' htmlFor="r2">
                      <input type="radio" name="nose-colour" id="r2" value="Blue" onChange={this.onNoseColorChanged} />
                      <span id='radio__colour--blue' className='checkmark checkmark__colours'></span>
                    </label>


                    <label className='container__radio' htmlFor="r3">
                      <input type="radio" name="nose-colour" id="r3" value="#FF0000" onChange={this.onNoseColorChanged} />
                      <span id='radio__colour--chuckNorris' className='checkmark checkmark__colours'></span>

                    </label>

                    <label className='container__radio' htmlFor="r4">
                      <input type="radio" name="nose-colour" id="r4" value="Yellow" onChange={this.onNoseColorChanged} />
                      <span id='radio__colour--yellow' className='checkmark checkmark__colours'></span>

                    </label>


                  </div>
                  <div className="container__text--stateColour">
                    <p>Colour: {this.state.noseColor}</p>
                  </div>
                </div>
              </div>

              {/* <!-- Menu 2 --> */}
              <div className="accordion-item">
                <a>Nose</a>
                <div className="info">
                  <div className='container__input'>
                    <input type="radio" name="nose-shape" id="r5" value="Triangle" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r6">Triangle</label>

                    <input type="radio" name="nose-shape" id="r6" value="Square" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r7">Square</label>

                    <input type="radio" name="nose-shape" id="r7" value="Circle" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r8">Circle</label>
                  </div>
                  <p>{(this.state.noseShape)}</p>
                </div>
              </div>

              {/* <!-- Menu 3 --> */}
              <div className="accordion-item">
                <a>Body</a>
                <div className="info">
                  <div className='container__input'>
                    <input type="radio" name="body-shape" id="r8" value="" onChange={this.onBodyShapeChanged} />
                    <label htmlFor="r8">Shape 1</label>

                    <input type="radio" name="body-shape" id="r9" value="" onChange={this.onBodyShapeChanged} />
                    <label htmlFor="r9">Shape 2</label>

                    <input type="radio" name="body-shape" id="r10" value="" onChange={this.onBodyShapeChanged} />
                    <label htmlFor="r10">Shape 3</label>
                  </div>
                </div>
              </div>

              {/* <!-- Menu 4 --> */}
              <div className="accordion-item">
                <a>Fins</a>
                <div className="info">

                  <div className='container__input'>
                    <input type="radio" name="fin-shape" id="r11" value="" onChange={this.onFinsShapeChanged} />
                    <label htmlFor="r11">Fins 1</label>

                    <input type="radio" name="fin-shape" id="r12" value="" onChange={this.onFinsShapeChanged} />
                    <label htmlFor="r12">Fins 2</label>

                    <input type="radio" name="fin-shape" id="r13" value="" onChange={this.onFinsShapeChanged} />
                    <label htmlFor="r13">Fins 3</label>
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