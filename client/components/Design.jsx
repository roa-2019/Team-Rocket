import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { thrusterShape } from '../actions/index'
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux'
import store from '../index'


import { Thruster1, Thruster2, Thruster3, Thruster4 } from './rocket-parts/indexParts'
import {  AccordionBody, AccordionColor, AccordionNose, AccordionStrokeColor, AccordionThruster, AccordionWindows, AccordionWings } from './accordion-parts/indexAccordion.js';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';




class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // noseShape: '',
      // changeColor: '',
      // strokeColor: '',
      // wingShape: '',
      // windowShape: '',
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

              {/* ROCKET BODY INPUT */}
              <AccordionBody />

              {/* ROCKET NOSE INPUT */}
              <AccordionNose />
             
              {/* ROCKET WINGS INPUT */}
              <AccordionWings />
              

              {/* ROCKET THRUSTER INPUT */}
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

              {/* ROCKET WINDOWS INPUT */}
              <AccordionWindows />
             


              {/* ROCKET COLORS INPUT */}
              <AccordionColor />

              {/* STROKE COLORS INPUT */}
              <AccordionStrokeColor />


            </Accordion>

          </div >
        </div >
      </Fragment >
    )
  }
}
  
export default connect()(Design)