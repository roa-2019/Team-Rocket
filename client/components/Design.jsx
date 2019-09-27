import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, noseColor, bodyShape, finShape } from '../actions/index'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

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

  onBodyShapeChanged = (e) => {
    this.props.dispatch(bodyShape(e.currentTarget.value));
    this.setState({ ...this.state, bodyShape: e.currentTarget.value })
  }

  onFinShapeChanged = (e) => {
    this.props.dispatch(finShape(e.currentTarget.value));
    this.setState({ ...this.state, finShape: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='design col b'>

          <div className="details-panel">
            <h3>Build Your Rocket</h3>
            <Accordion>


              {/* COLOR INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Colours
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
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
                  <div className="container__input--text">
                    <p>Type Of Colour</p>
                    <p>Type Of Colour</p>
                    <p>Type Of Colour</p>
                    <p>Type Of Colour</p>
                  </div>

                  <div className="container__text--code">
                    <p>Colour: {this.state.noseColor}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              {/* NOSE INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Nose
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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

                  <div className="container__text--code">
                    <p>Nose Shape: {this.state.noseShape}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              {/* BODY INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Body
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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

                  <div className="container__text--code">
                    <p>Body Shape: {this.state.bodyShape}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

               {/* WINDOW INPUT */}
               <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Windows
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className='container__input'>
                    <input type="radio" name="thruster-shape" id="r11" value="wing" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r11">Window 1</label>

                    <input type="radio" name="thruster-shape" id="r12" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r12">Window 2</label>

                    <input type="radio" name="thruster-shape" id="r13" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r13">Window 3</label>
                  </div>


                  <div className="container__input--text">
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                  </div>

                  <div className="container__text--code">
                    <p>Wing Shape: {this.state.finShape}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              {/* WINGS INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wings
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className='container__input'>
                    <input type="radio" name="thruster-shape" id="r14" value="wing" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r14">Thruster 1</label>

                    <input type="radio" name="thruster-shape" id="r15" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r15">Thruster 2</label>

                    <input type="radio" name="thruster-shape" id="r16" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r16">Thruster 3</label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                  </div>

                  <div className="container__text--code">
                    <p>Wing Shape: {this.state.finShape}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

               {/* THRUSTER INPUT */}
               <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Thruster
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className='container__input'>
                    <input type="radio" name="thruster-shape" id="r17" value="wing" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r17">Thruster 1</label>

                    <input type="radio" name="thruster-shape" id="r18" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r18">Thruster 2</label>

                    <input type="radio" name="thruster-shape" id="r19" value="" onChange={this.onFinShapeChanged} />
                    <label htmlFor="r19">Thruster 3</label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Thruster</p>
                    <p>Type Of Thruster</p>
                    <p>Type Of Thruster</p>
                  </div>

                  <div className="container__text--code">
                    <p>Thruster Shape: {this.state.finShape}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>


            </Accordion>

          </div >
        </div >
      </Fragment >
    )
  }
}


export default connect()(Design)