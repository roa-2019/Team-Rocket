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
    this.setState({ ...this.state, windowShape: e.currentTarget.value })
  }

  onThrusterShapeChanged = (e) => {
    this.props.dispatch(thrusterShape(e.currentTarget.value));
    this.setState({ ...this.state, thrusterShape: e.currentTarget.value })
  }

  render() {
    return (
      <Fragment>
        <div className='design col'>

          <div className="details-panel">
            <h3> ~ Build Your Rocket ~ </h3>
            <Accordion>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Color
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                  <div className='container__input'>

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
                    <p className="">Green</p>
                    <p className="">Blue</p>
                    <p className="">Chuck Norris</p>
                    <p >Yellow</p>
                  </div>

                  <div className="container__text--code">
                    <p className="margin__left"> {this.state.changeColor}</p>
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
                  <div className='container__input '>

                    <label className='container__radio' htmlFor="r5">
                      <input type="radio" name="nose-shape" id="r5" value="Triangle" onChange={this.onNoseShapeChanged} />
                      <span id='radio__nose--square' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r6">
                      <input type="radio" name="nose-shape" id="r6" value="LongTriangle" onChange={this.onNoseShapeChanged} />
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
                    <p className="margin__left">{this.state.noseShape}</p>
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
                      <input type="radio" name="body-shape" id="r8" value="Rectangle" onChange={this.onBodyShapeChanged} />
                      <span id='radio__body--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r9">
                      <input type="radio" name="body-shape" id="r9" value="Trapazoid" onChange={this.onBodyShapeChanged} />
                      <span id='radio__body--2' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r10">
                      <input type="radio" name="body-shape" id="r10" value="Pillar" onChange={this.onBodyShapeChanged} />
                      <span id='radio__body--3' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r11">
                      <input type="radio" name="body-shape" id="r11" value="Body4" onChange={this.onBodyShapeChanged} />
                      <span id='radio__body--3' className='checkmark checkmark__shape'></span>
                    </label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Shape</p>
                    <p>Type Of Shape</p>
                    <p>Type Of Shape</p>
                  </div>

                  <div className="container__text--code">
                    <p className="margin__left">{this.state.bodyShape}</p>
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

                    <label className='container__radio' htmlFor="r12">
                      <input type="radio" name="window-shape" id="r12" value="longWindowSet" onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r13">
                      <input type="radio" name="window-shape" id="r13" value="threeLargeCircularWindows" onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--2' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r14">
                      <input type="radio" name="window-shape" id="r14" value="threeMediumRectangularWindows" onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--3' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r15">
                      <input type="radio" name="window-shape" id="r15" value="twoLargePanels" onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--4' className='checkmark checkmark__shape'></span>
                    </label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                    <p>Type Of Window</p>
                  </div>

                  <div className="container__text--code">
                    <p className="margin__left">{this.state.windowShape}</p>
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
                    <label className='container__radio' htmlFor="r15">
                      <input type="radio" name="window-shape" id="r15" value="window" onChange={this.onWingShapeChanged} />
                      <span id='radio__wings--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r16">
                      <input type="radio" name="window-shape" id="r16" value="" onChange={this.onWingShapeChanged} />
                      <span id='radio__wings--2' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r17">
                      <input type="radio" name="window-shape" id="r17" value="" onChange={this.onWinghapeChanged} />
                      <span id='radio__wings--3' className='checkmark checkmark__shape'></span>
                    </label>
                  </div>

                  <div className="container__input--text">
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                    <p>Type Of Wing</p>
                  </div>

                  <div className="container__text--code">
                    <p className="margin__left">{this.state.wingShape}</p>
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

                    <label className='container__radio' htmlFor="r18">
                      <input type="radio" name="thruster-shape" id="r18" value="thruster" onChange={this.onThrusterShapeChanged} />
                      <span id='radio__thruster--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor="r19">
                      <input type="radio" name="thruster-shape" id="r19" value="" onChange={this.onThrusterChanged} />
                      <span id='radio__thruster--2' className='checkmark checkmark__shape'></span>

                    </label>

                    <label className='container__radio' htmlFor="r20">
                      <input type="radio" name="thruster-shape" id="r20" value="" onChange={this.onThrusterChanged} />
                      <span id='radio__thruster--3' className='checkmark checkmark__shape'></span>
                    </label>
                  </div>

                  <div className="container__input--text">
                    <p>Thruster</p>
                    <p>Thruster</p>
                    <p>Thruster</p>
                  </div>

                  <div className="container__text--code">
                    <p className="margin__left">{this.state.thrusterShape}</p>
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