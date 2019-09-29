import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, windowShape, thrusterShape } from '../actions/index'
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux'
import store from '../index'


import { Nose1, Nose2, Nose3, Nose4 } from './rocket-parts/indexParts'

import { Window1, Window2, Window3, Window4 } from './rocket-parts/indexParts'
import { Thruster1, Thruster2, Thruster3, Thruster4 } from './rocket-parts/indexParts'
import { AccordionColor, AccordionBody, AccordionBorder, AccordionNose, AccordionStrokeColor, AccordionThruster, AccordionWindows, AccordionWings } from './accordion-parts/indexAccordion.js';

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
      // changeColor: '',
      // strokeColor: '',
      // wingShape: '',
      windowShape: '',
      thrusterShape: ''
    }
  }


  componentDidMount() {
    let items = document.querySelectorAll('.accordion a');
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

          <div className='details-panel'>
            <h3> ~ Build Your Rocket ~ </h3>
            <Accordion>

              {/* BODY INPUT */}
              <AccordionBody />

              {/* NOSE INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Nose
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                    <p className='margin__left'>{this.state.noseShape == 'Ellipse' && ReactDOMServer.renderToString(<Provider store={store}><Nose1 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.noseShape == 'Pyramid' && ReactDOMServer.renderToString(<Provider store={store}><Nose2 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.noseShape == 'Triangular' && ReactDOMServer.renderToString(<Provider store={store}><Nose3 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.noseShape == 'Top Window' && ReactDOMServer.renderToString(<Provider store={store}><Nose4 /></Provider>)}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>


              {/* WINGS INPUT */}
              <AccordionWings />
              

              {/* THRUSTER INPUT */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Thruster
                    </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className='container__input'>


                    <label className='container__radio' htmlFor='r13'>
                      <input type='radio' name='thruster-shape' id='r13' value='Thruster1' onChange={this.onThrusterShapeChanged} />
                      <span id='radio__thruster--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r14'>
                      <input type='radio' name='thruster-shape' id='r14' value='Thruster2' onChange={this.onThrusterShapeChanged} />
                      <span id='radio__thruster--2' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r15'>
                      <input type='radio' name='thruster-shape' id='r15' value='Thruster3' onChange={this.onThrusterShapeChanged} />
                      <span id='radio__thruster--3' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r16'>
                      <input type='radio' name='thruster-shape' id='r16' value='Thruster4' onChange={this.onThrusterShapeChanged} />
                      <span id='radio__thruster--4' className='checkmark checkmark__shape'></span>
                    </label>


                  </div>

                  <div className='container__input--text'>
                    <p>Rectanglular</p>
                    <p>Triangular</p>
                    <p>Trapeziod</p>
                    <p>Fin</p>
                  </div>

                  <div className='container__text--code'>
                    <p className='margin__left'>{this.state.thrusterShape == 'Thruster1' && ReactDOMServer.renderToString(<Provider store={store}><Thruster1 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.thrusterShape == 'Thruster2' && ReactDOMServer.renderToString(<Provider store={store}><Thruster2 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.thrusterShape == 'Thruster3' && ReactDOMServer.renderToString(<Provider store={store}><Thruster3 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.thrusterShape == 'Thruster4' && ReactDOMServer.renderToString(<Provider store={store}><Thruster4 /></Provider>)}</p>
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

                    <label className='container__radio' htmlFor='r17'>
                      <input type='radio' name='window-shape' id='r17' value='longWindowSet' onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--1' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r18'>
                      <input type='radio' name='window-shape' id='r18' value='threeLargeCircularWindows' onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--2' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r19'>
                      <input type='radio' name='window-shape' id='r19' value='threeMediumRectangularWindows' onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--3' className='checkmark checkmark__shape'></span>
                    </label>

                    <label className='container__radio' htmlFor='r20'>
                      <input type='radio' name='window-shape' id='r20' value='twoLargePanels' onChange={this.onWindowShapeChanged} />
                      <span id='radio__window--4' className='checkmark checkmark__shape'></span>
                    </label>
                  </div>

                  <div className='container__input--text'>
                    <p>Long Window</p>
                    <p>Circular</p>
                    <p>Rectangular</p>
                    <p>Large Window</p>
                  </div>

                  <div className='container__text--code'>
                    <p className='margin__left'>{this.state.windowShape == 'longWindowSet' && ReactDOMServer.renderToString(<Provider store={store}><Window1 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.windowShape == 'threeLargeCircularWindows' && ReactDOMServer.renderToString(<Provider store={store}><Window2 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.windowShape == 'threeMediumRectangularWindows' && ReactDOMServer.renderToString(<Provider store={store}><Window3 /></Provider>)}</p>
                    <p className='margin__left'>{this.state.windowShape == 'twoLargePanels' && ReactDOMServer.renderToString(<Provider store={store}><Window4 /></Provider>)}</p>
                  </div>


                </AccordionItemPanel>
              </AccordionItem>


              {/* Colors INPUT */}
              <AccordionColor />

              {/* Stroke color INPUT */}
              <AccordionStrokeColor />


            </Accordion>

          </div >
        </div >
      </Fragment >
    )
  }
}
  
export default connect()(Design)