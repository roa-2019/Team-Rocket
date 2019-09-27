import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, changeColor, bodyShape, wingShape, windowShape, thrusterShape } from '../actions/index'

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
      changeColor: '',
      bodyShape: '',
      wingShape: '',
      windowShape: '',
      thrusterShape: ''
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

  onColorChanged = (e) => {
    this.props.dispatch(changeColor(e.currentTarget.value));
    this.setState({ ...this.state, changeColor: e.currentTarget.value })
  }

  onNoseShapeChanged = (e) => {
    this.props.dispatch(noseShape(e.currentTarget.value));
    this.setState({ ...this.state, noseShape: e.currentTarget.value })
  }

  onBodyShapeChanged = (e) => {
    this.props.dispatch(bodyShape(e.currentTarget.value));
    this.setState({ ...this.state, bodyShape: e.currentTarget.value })
  }

  onWingShapeChanged = (e) => {
    this.props.dispatch(wingShape(e.currentTarget.value));
    this.setState({ ...this.state, wingShape: e.currentTarget.value })
  }

  onWindowShapeChanged = (e) => {
    this.props.dispatch(windowShape(e.currentTarget.value));
    this.setState({...this.state, windowShape: e.currentTarget.value})
  }

  onThrusterShapeChanged = (e) => {
    this.props.dispatch(thrusterShape(e.currentTarget.value));
    this.setState({ ...this.state, thrusterShape: e.currentTarget.value})
  }

  render() {
    return (
      <Fragment>
        <div className='design col b'>

          <div className="details-panel">
            <h3>Build Your Rocket</h3>
            <Accordion>

            <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Color
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    
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

                  <div className="container__text--code">
                    <p>Colour: {this.state.changeColor}</p>
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

               {/* WINDOWS INPUT */}
               <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Windows
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className='container__input'>
                    <input type="radio" name="window-shape" id="r11" value="" onChange={this.onWindowShapeChanged} />
                    <label htmlFor="r11">Wing 1</label>

                    <input type="radio" name="window-shape" id="r12" value="" onChange={this.onWindowShapeChanged} />
                    <label htmlFor="r12">Wing 2</label>

                    <input type="radio" name="window-shape" id="r13" value="" onChange={this.onWindowShapeChanged} />
                    <label htmlFor="r13">Wing 3</label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                  </div>

                  <div className="container__text--code">
                    <p>Wing Shape: {this.state.windowShape}</p>
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
                    <input type="radio" name="window-shape" id="r14" value="window" onChange={this.onWingShapeChanged} />
                    <label htmlFor="r14">Thruster 1</label>

                    <input type="radio" name="window-shape" id="r15" value="" onChange={this.onWingShapeChanged} />
                    <label htmlFor="r15">Thruster 2</label>

                    <input type="radio" name="window-shape" id="r16" value="" onChange={this.onWinghapeChanged} />
                    <label htmlFor="r16">Thruster 3</label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                  </div>

                  <div className="container__text--code">
                    <p>Wing Shape: {this.state.wingShape}</p>
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
                    <input type="radio" name="thruster-shape" id="r17" value="thruster" onChange={this.onThrusterShapeChanged} />
                    <label htmlFor="r17">Thruster 1</label>

                    <input type="radio" name="thruster-shape" id="r18" value="" onChange={this.onThrusterChanged} />
                    <label htmlFor="r18">Thruster 2</label>

                    <input type="radio" name="thruster-shape" id="r19" value="" onChange={this.onThrusterChanged} />
                    <label htmlFor="r19">Thruster 3</label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Thruster</p>
                    <p>Type Of Thruster</p>
                    <p>Type Of Thruster</p>
                  </div>

                  <div className="container__text--code">
                    <p>Thruster Shape: {this.state.thrusterShape}</p>
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